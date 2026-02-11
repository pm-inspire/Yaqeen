import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  leftSlot?: React.ReactNode;
};

export const Button = ({
  label,
  onPress,
  variant = "primary",
  disabled = false,
  fullWidth = true,
  leftSlot
}: ButtonProps): React.JSX.Element => {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "ghost" && styles.ghost,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed
      ]}
    >
      <View style={styles.content}>
        {leftSlot}
        <Text
          style={[
            styles.text,
            variant === "primary" ? styles.primaryText : styles.secondaryText
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: theme.touchTarget,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,
    justifyContent: "center",
    borderWidth: 1
  },
  fullWidth: {
    width: "100%"
  },
  content: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.sm
  },
  primary: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary
  },
  secondary: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.primary
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  disabled: {
    backgroundColor: theme.colors.disabled,
    borderColor: theme.colors.disabled
  },
  pressed: {
    opacity: 0.9
  },
  text: {
    ...theme.typography.button,
    textAlign: "center"
  },
  primaryText: {
    color: theme.colors.surface
  },
  secondaryText: {
    color: theme.colors.primaryDark
  }
});
