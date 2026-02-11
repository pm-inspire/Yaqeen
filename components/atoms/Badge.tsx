import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

type BadgeTone = "default" | "success" | "warning";

type BadgeProps = {
  label: string;
  tone?: BadgeTone;
};

export const Badge = ({ label, tone = "default" }: BadgeProps): React.JSX.Element => {
  return (
    <View
      style={[
        styles.base,
        tone === "success" && styles.success,
        tone === "warning" && styles.warning
      ]}
    >
      <Text
        style={[
          styles.label,
          tone === "success" && styles.successText,
          tone === "warning" && styles.warningText
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    backgroundColor: theme.colors.primarySoft
  },
  success: {
    backgroundColor: "#E6F7EF"
  },
  warning: {
    backgroundColor: "#FFF2E4"
  },
  label: {
    ...theme.typography.caption,
    color: theme.colors.primaryDark,
    textAlign: "center"
  },
  successText: {
    color: theme.colors.success
  },
  warningText: {
    color: theme.colors.warning
  }
});
