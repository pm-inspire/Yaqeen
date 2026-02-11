import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Button, Card } from "../atoms";

type PaymentSummaryProps = {
  subtotalSAR: number;
  vatSAR: number;
  totalSAR: number;
  onPayNow?: () => void;
};

export const PaymentSummary = ({
  subtotalSAR,
  vatSAR,
  totalSAR,
  onPayNow
}: PaymentSummaryProps): React.JSX.Element => {
  return (
    <Card>
      <Text style={styles.title}>ملخص الدفع</Text>
      <View style={styles.row}>
        <Text style={styles.value}>{subtotalSAR.toFixed(2)} SAR</Text>
        <Text style={styles.label}>سعر الشرح</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{vatSAR.toFixed(2)} SAR</Text>
        <Text style={styles.label}>ضريبة القيمة المضافة</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.totalValue}>{totalSAR.toFixed(2)} SAR</Text>
        <Text style={styles.totalLabel}>الإجمالي</Text>
      </View>
      <View style={styles.cta}>
        <Button label="ادفع الآن" onPress={onPayNow} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    ...theme.typography.h3,
    color: theme.colors.text,
    textAlign: "right",
    marginBottom: theme.spacing.sm
  },
  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xs
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.textSecondary
  },
  value: {
    ...theme.typography.body,
    color: theme.colors.text
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm
  },
  totalLabel: {
    ...theme.typography.bodyLg,
    color: theme.colors.text,
    fontWeight: "700"
  },
  totalValue: {
    ...theme.typography.h3,
    color: theme.colors.primaryDark
  },
  cta: {
    marginTop: theme.spacing.md
  }
});
