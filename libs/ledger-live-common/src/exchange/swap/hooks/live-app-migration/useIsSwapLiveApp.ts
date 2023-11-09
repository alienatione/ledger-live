import { CryptoOrTokenCurrency } from "@ledgerhq/types-cryptoassets";
import { useFeature } from "../../../../featureFlags";
import { useIsCurrencySupported } from "./useIsCurrencySupported";
import { useCallback, useMemo, useState } from "react";

type Props = {
  currencyFrom?: CryptoOrTokenCurrency;
  swapWebManifestId: string;
};

export function useIsSwapLiveApp({ currencyFrom, swapWebManifestId }: Props) {
  const ptxSwapLiveApp = useFeature("ptxSwapLiveApp");

  const params = useMemo(() => {
    const variantParams = ptxSwapLiveApp?.params?.[swapWebManifestId] || {};

    const enabled =
      variantParams.enabled !== undefined
        ? Boolean(variantParams.enabled)
        : ptxSwapLiveApp?.enabled;

    const results = {
      ...(ptxSwapLiveApp?.params || {}),
      ...variantParams,
      enabled,
    };

    return results;
  }, [ptxSwapLiveApp]);

  const isCurrencySupported = useIsCurrencySupported({
    currencyFrom,
    params,
  });

  const [crashed, setHasCrashed] = useState(false);
  const onLiveAppCrashed = useCallback(() => setHasCrashed(true), []);

  const liveAppAvailable = useMemo(() => {
    if (crashed) {
      return false;
    }
    if (isCurrencySupported) {
      return params.enabled;
    }
    return params.enabled;
  }, [crashed, isCurrencySupported, params.enabled]);

  return {
    enabled: liveAppAvailable,
    onLiveAppCrashed,
  };
}
