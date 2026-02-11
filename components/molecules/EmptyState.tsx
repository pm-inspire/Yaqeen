import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "../atoms";
import { theme } from "../../styles/theme";

type EmptyStateProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  onPressCTA?: () => void;
};

export const EmptyState = ({
  title,
  description,
  ctaLabel,
  onPressCTA
}: EmptyStateProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Icon name="empty" color={theme.colors.primary} size={24} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {ctaLabel ? <Button label={ctaLabel} onPress={onPressCTA} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    gap: theme.spacing.sm
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primarySoft
  },
  title: {
    ...theme.typography.h3,
    color: theme.colors.text,
    textAlign: "center"
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: "center"
  }
});
