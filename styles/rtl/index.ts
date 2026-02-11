import { I18nManager, StyleSheet, ViewStyle } from "react-native";

export const rtl = {
  isRTL: I18nManager.isRTL,
  textAlign: (align: "left" | "right" = "right"): ViewStyle => ({
    alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start",
    ...(align === "right" ? { writingDirection: "rtl" } : {})
  }),
  row: StyleSheet.create({
    base: {
      flexDirection: I18nManager.isRTL ? "row-reverse" : "row"
    }
  }).base
};
