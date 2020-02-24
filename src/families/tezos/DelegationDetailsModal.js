/* @flow */

import React, { useCallback } from "react";
import { Trans } from "react-i18next";
import { StyleSheet, View, ScrollView, Linking } from "react-native";
import { withNavigation, SafeAreaView } from "react-navigation";
import differenceInCalendarDays from "date-fns/difference_in_calendar_days";
import {
  getDefaultExplorerView,
  getTransactionExplorer,
  getAddressExplorer,
} from "@ledgerhq/live-common/lib/explorers";
import type { AccountLike, Account } from "@ledgerhq/live-common/lib/types";
import type { Delegation } from "@ledgerhq/live-common/lib/families/tezos/bakers";
import {
  getMainAccount,
  getAccountCurrency,
  getAccountUnit,
  getAccountName,
} from "@ledgerhq/live-common/lib/account";
import { getCurrencyColor } from "@ledgerhq/live-common/lib/currencies";
import Icon from "react-native-vector-icons/dist/Feather";
import getWindowDimensions from "../../logic/getWindowDimensions";
import IconReceive from "../../icons/Receive";
import LText from "../../components/LText";
import CurrencyUnitValue from "../../components/CurrencyUnitValue";
import CounterValue from "../../components/CounterValue";
import CurrencyIcon from "../../components/CurrencyIcon";
import Touchable from "../../components/Touchable";
import BottomModal from "../../components/BottomModal";
import Circle from "../../components/Circle";
import Close from "../../icons/Close";
import colors, { rgba } from "../../colors";
import BakerImage from "./BakerImage";
import DelegatingContainer from "./DelegatingContainer";

type Props = {
  isOpened: boolean,
  onClose: () => void,
  navigation: *,
  account: AccountLike,
  parentAccount: ?Account,
  delegation: Delegation,
};

const forceInset = { bottom: "always" };

const styles = StyleSheet.create({
  modal: {
    position: "relative",
  },
  close: {
    position: "absolute",
    top: 8,
    right: 16,
  },
  root: {
    padding: 16,
  },
  subHeader: {
    paddingBottom: 16,
    alignItems: "center",
    alignSelf: "center",
  },
  currencyValue: {
    color: colors.darkBlue,
    fontSize: 22,
  },
  counterValue: {
    color: colors.grey,
    fontSize: 16,
  },

  propertyRow: {
    borderBottomColor: colors.lightFog,
    borderBottomWidth: 1,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  propertyRowLast: {
    borderBottomWidth: 0,
  },
  propertyLabel: {
    paddingRight: 8,
    fontSize: 14,
    color: colors.smoke,
  },
  propertyValueText: {
    color: colors.darkBlue,
    fontSize: 14,
  },
  propertyValueTextTouchable: {
    color: colors.live,
  },
  propertyBody: {
    width: "50%",
    alignItems: "flex-end",
  },

  footerBtn: {
    width: 80,
    alignItems: "center",
  },
  footerBtnLabel: {
    marginTop: 8,
    color: colors.darkBlue,
    fontSize: 14,
    textAlign: "center",
  },
  footer: {
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Property = ({
  label,
  children,
  last,
}: {
  label: React$Node,
  children: React$Node,
  last?: boolean,
}) => (
  <View style={[styles.propertyRow, last ? styles.propertyRowLast : null]}>
    <LText semiBold style={styles.propertyLabel}>
      {label}
    </LText>
    <View style={styles.propertyBody}>{children}</View>
  </View>
);

const FooterBtn = ({
  label,
  icon,
  event,
  onPress,
}: {
  label: React$Node,
  icon: React$Node,
  event: *,
  onPress: () => void,
}) => (
  <Touchable event={event} style={styles.footerBtn} onPress={onPress}>
    {icon}
    <LText semiBold style={styles.footerBtnLabel}>
      {label}
    </LText>
  </Touchable>
);

const DelegationDetailsModal = ({
  onClose,
  isOpened,
  account,
  parentAccount,
  delegation,
  navigation,
}: Props) => {
  const currency = getAccountCurrency(account);
  const unit = getAccountUnit(account);
  const mainAccount = getMainAccount(account, parentAccount);
  const { baker } = delegation;
  const amount = account.balance;
  const days = differenceInCalendarDays(Date.now(), delegation.operation.date);
  const color = getCurrencyColor(currency);

  const explorerView = getDefaultExplorerView(mainAccount.currency);
  const bakerURL = getAddressExplorer(explorerView, delegation.address);
  const txURL = getTransactionExplorer(explorerView, delegation.operation.hash);

  const accountId = account.id;
  const parentId = parentAccount && parentAccount.id;

  const onOpenBaker = useCallback(() => {
    if (bakerURL) Linking.openURL(bakerURL);
  }, [bakerURL]);

  const onOpenTransaction = useCallback(() => {
    if (txURL) Linking.openURL(txURL);
  }, [txURL]);

  const onReceive = useCallback(() => {
    navigation.navigate("ReceiveConnectDevice", {
      accountId,
      parentId,
    });
    onClose();
  }, [accountId, parentId, navigation, onClose]);

  const onChangeValidator = useCallback(() => {
    // FIXME how to get rid of Started step in nav stack?
    navigation.navigate("DelegationSummary", {
      accountId,
      parentId,
    });
    onClose();
  }, [accountId, parentId, navigation, onClose]);

  const onEndDelegation = useCallback(() => {
    // FIXME how to get rid of Started step in nav stack?
    navigation.navigate("DelegationSummary", {
      accountId,
      parentId,
      mode: "undelegate",
    });
    onClose();
  }, [accountId, parentId, navigation, onClose]);

  const height = Math.min(getWindowDimensions().height - 400, 280);

  return (
    <BottomModal
      id="DelegationDetailsModal"
      isOpened={isOpened}
      onClose={onClose}
      style={styles.modal}
    >
      <SafeAreaView style={styles.root} forceInset={forceInset}>
        <Touchable
          event="DelegationDetailsModalClose"
          style={styles.close}
          onPress={onClose}
        >
          <Circle size={32} bg={colors.lightFog}>
            <Close size={16} color={colors.grey} />
          </Circle>
        </Touchable>

        <DelegatingContainer
          left={
            <Circle size={64} bg={rgba(color, 0.2)}>
              <CurrencyIcon size={32} currency={currency} />
            </Circle>
          }
          right={<BakerImage baker={baker} />}
        />

        <View style={styles.subHeader}>
          <LText tertiary style={styles.currencyValue}>
            <CurrencyUnitValue showCode unit={unit} value={amount} />
          </LText>

          <LText tertiary style={styles.counterValue}>
            <CounterValue
              showCode
              date={delegation.operation.date}
              currency={currency}
              value={amount}
            />
          </LText>
        </View>

        <ScrollView style={{ height }}>
          {baker ? (
            <Property label={<Trans i18nKey="delegation.validator" />}>
              <LText
                semiBold
                style={styles.propertyValueText}
                numberOfLines={1}
              >
                {baker.name}
              </LText>
            </Property>
          ) : null}
          <Property label={<Trans i18nKey="delegation.validatorAddress" />}>
            <Touchable event="DelegationDetailsOpenBaker" onPress={onOpenBaker}>
              <LText
                semiBold
                style={[
                  styles.propertyValueText,
                  styles.propertyValueTextTouchable,
                ]}
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {delegation.address}
              </LText>
            </Touchable>
          </Property>
          <Property label={<Trans i18nKey="delegation.delegatedAccount" />}>
            <LText
              semiBold
              style={styles.propertyValueText}
              numberOfLines={1}
              ellipsizeMode="middle"
            >
              {getAccountName(account)}
            </LText>
          </Property>
          <Property label={<Trans i18nKey="delegation.duration" />}>
            <LText semiBold style={styles.propertyValueText}>
              {days ? (
                <Trans
                  i18nKey="delegation.durationDays"
                  count={days}
                  values={{ count: days }}
                />
              ) : (
                <Trans i18nKey="delegation.durationDays0" />
              )}
            </LText>
          </Property>
          <Property last label={<Trans i18nKey="delegation.transactionID" />}>
            <Touchable
              event="DelegationDetailsOpenTx"
              onPress={onOpenTransaction}
            >
              <LText
                semiBold
                style={[
                  styles.propertyValueText,
                  styles.propertyValueTextTouchable,
                ]}
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {delegation.operation.hash}
              </LText>
            </Touchable>
          </Property>
        </ScrollView>

        {account.type !== "Account" ? null : (
          <View style={styles.footer}>
            <FooterBtn
              event="DelegationDetailsReceive"
              label={<Trans i18nKey="delegation.receive" />}
              icon={
                <Circle bg={rgba(colors.live, 0.2)} size={48}>
                  <IconReceive size={16} color={colors.live} />
                </Circle>
              }
              onPress={onReceive}
            />
            <FooterBtn
              event="DelegationDetailsChangeValidator"
              label={<Trans i18nKey="delegation.changeValidator" />}
              icon={
                <Circle bg={rgba(colors.live, 0.2)} size={48}>
                  <Icon size={16} name="edit-2" color={colors.live} />
                </Circle>
              }
              onPress={onChangeValidator}
            />
            <FooterBtn
              event="DelegationDetailsUndelegate"
              label={<Trans i18nKey="delegation.endDelegation" />}
              icon={
                <Circle bg={rgba(colors.alert, 0.2)} size={48}>
                  <View
                    style={{
                      borderRadius: 4,
                      backgroundColor: colors.alert,
                      width: 16,
                      height: 16,
                    }}
                  />
                </Circle>
              }
              onPress={onEndDelegation}
            />
          </View>
        )}
      </SafeAreaView>
    </BottomModal>
  );
};

export default withNavigation(DelegationDetailsModal);
