import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { theme } from "../../styles/theme";

type CardProps = ViewProps & {
  elevated?: boolean;
};

export const Card = ({ children, style, elevated = true, ...props }: CardProps): React.JSX.Element => {
  return (
    <View style={[styles.base, elevated && theme.shadows.card, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  }
});
