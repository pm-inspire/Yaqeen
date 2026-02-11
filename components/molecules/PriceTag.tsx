import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

type PriceTagProps = {
  amountSAR: number;
  subtitle?: string;
};

export const PriceTag = ({ amountSAR, subtitle }: PriceTagProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{amountSAR.toFixed(2)} SAR</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    gap: theme.spacing.xs
  },
  amount: {
    ...theme.typography.h3,
    color: theme.colors.primaryDark
  },
  subtitle: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary
  }
});
