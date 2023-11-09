import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { context } from "~/renderer/drawers/Provider";
import WebviewErrorDrawer, { SwapLiveError } from "./WebviewErrorDrawer/index";
import { useLocalLiveAppManifest } from "@ledgerhq/live-common/platform/providers/LocalLiveAppProvider/index";
import { useRemoteLiveAppManifest } from "@ledgerhq/live-common/platform/providers/RemoteLiveAppProvider/index";
import { counterValueCurrencySelector, languageSelector } from "~/renderer/reducers/settings";
import useTheme from "~/renderer/hooks/useTheme";
import { Web3AppWebview } from "~/renderer/components/Web3AppWebview";
import { WebviewAPI, WebviewProps, WebviewState } from "~/renderer/components/Web3AppWebview/types";
import { initialWebviewState } from "~/renderer/components/Web3AppWebview/helpers";
import { handlers as loggerHandlers } from "@ledgerhq/live-common/wallet-api/CustomLogger/server";
import { TopBar } from "~/renderer/components/WebPlatformPlayer/TopBar";
import { captureException } from "~/sentry/internal";

const isDevelopment = process.env.NODE_ENV === "development";

class UnableToLoadSwapLiveError extends Error {
  constructor(message: string) {
    const name = "UnableToLoadSwapLiveError";
    super(message || name);
    this.name = name;
    this.message = message;
  }
}

type CustomHandlersParams<Params> = {
  params: Params;
};

export type SwapWebProps = {
  swapState?: Partial<{
    provider: string;
    fromAccountId: string;
    toAccountId: string;
    fromAmount: string;
    quoteId: string;
    rate: string;
    feeStrategy: string;
    customFeeConfig: string;
    cacheKey: string;
    loading: boolean;
    error: boolean;
  }>;
  onRedirectToProviderApp(_: string): void;
  onLiveAppUnavailable(): void;
};

export const SWAP_WEB_MANIFEST_ID = "swap-live-app-demo-0";

const SwapWebAppWrapper = styled.div<{ isDevelopment: boolean }>(
  ({ isDevelopment }) => `
  ${!isDevelopment ? "height: 0px;" : ""}
  width: 100%;
`,
);

const SwapWebView = ({
  swapState,
  onRedirectToProviderApp,
  onLiveAppUnavailable,
}: SwapWebProps) => {
  const {
    colors: {
      palette: { type: themeType },
    },
  } = useTheme();
  const webviewAPIRef = useRef<WebviewAPI>(null);
  const { setDrawer } = React.useContext(context);
  const [webviewState, setWebviewState] = useState<WebviewState>(initialWebviewState);
  const fiatCurrency = useSelector(counterValueCurrencySelector);
  const locale = useSelector(languageSelector);
  const localManifest = useLocalLiveAppManifest(SWAP_WEB_MANIFEST_ID);
  const remoteManifest = useRemoteLiveAppManifest(SWAP_WEB_MANIFEST_ID);
  const manifest = localManifest || remoteManifest;

  const hasManifest = !!manifest;
  const hasSwapState = !!swapState;

  const customHandlers = useMemo(() => {
    return {
      ...loggerHandlers,
      "custom.swapStateGet": () => {
        return Promise.resolve(swapState);
      },
      // TODO: when we need bidirectional communication
      // "custom.swapStateSet": (params: CustomHandlersParams<unknown>) => {
      //   return Promise.resolve();
      // },
      "custom.throwExchangeErrorToLedgerLive": ({
        params,
      }: CustomHandlersParams<SwapLiveError>) => {
        onSwapWebviewError(params);
        return Promise.resolve();
      },
      "custom.throwGenericErrorToLedgerLive": () => {
        onSwapWebviewError();
        return Promise.resolve();
      },
      "custom.redirectToProviderApp": ({ params }: { params: string }) => {
        onRedirectToProviderApp(params);
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapState?.cacheKey]);

  useEffect(() => {
    if (webviewState.url.includes("/unknown-error")) {
      // the live app has re-directed to /unknown-error. Handle this in callback, probably wallet-api failure.
      onSwapWebviewError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webviewState.url]);

  if (!hasManifest || !hasSwapState) {
    return null;
  }

  const onSwapWebviewError = (error?: SwapLiveError) => {
    console.error("onSwapWebviewError", error);
    setDrawer(WebviewErrorDrawer, error);
  };

  const onStateChange: WebviewProps["onStateChange"] = state => {
    setWebviewState(state);
    if (!state.loading && state.isAppUnavailable) {
      console.error("onSwapLiveAppUnavailable", state);
      onLiveAppUnavailable();
      captureException(
        new UnableToLoadSwapLiveError(
          '"Failed to load swap live app using WebPlatformPlayer in SwapWeb",',
        ),
      );
    }
  };

  return (
    <>
      {isDevelopment && (
        <TopBar manifest={manifest} webviewAPIRef={webviewAPIRef} webviewState={webviewState} />
      )}
      <SwapWebAppWrapper isDevelopment={isDevelopment}>
        <Web3AppWebview
          manifest={manifest}
          inputs={{
            cacheKey: swapState.cacheKey,
            theme: themeType,
            lang: locale,
            currencyTicker: fiatCurrency.ticker,
          }}
          onStateChange={onStateChange}
          ref={webviewAPIRef}
          customHandlers={customHandlers as never}
        />
      </SwapWebAppWrapper>
    </>
  );
};

export default SwapWebView;
