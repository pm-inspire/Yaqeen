import React from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../styles/theme";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export const Input = ({ label, error, style, ...props }: InputProps): React.JSX.Element => {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={theme.colors.textSecondary}
        style={[styles.input, style]}
        textAlign="right"
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: theme.spacing.xs
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: "right"
  },
  input: {
    minHeight: theme.touchTarget,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    color: theme.colors.text,
    ...theme.typography.body
  },
  error: {
    ...theme.typography.caption,
    color: theme.colors.error,
    textAlign: "right"
  }
});
