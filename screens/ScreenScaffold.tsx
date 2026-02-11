import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

type ScreenScaffoldProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export const ScreenScaffold = ({
  title,
  subtitle,
  children
}: ScreenScaffoldProps): React.JSX.Element => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
    backgroundColor: theme.colors.background
  },
  header: {
    gap: theme.spacing.xs
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    textAlign: "right"
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: "right"
  }
});
