import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Icon } from "../atoms";

type FilterBarProps = {
  sortLabel: string;
  filterCount?: number;
  tags?: string[];
  onPressSort?: () => void;
  onPressFilters?: () => void;
};

export const FilterBar = ({
  sortLabel,
  filterCount = 0,
  tags = [],
  onPressSort,
  onPressFilters
}: FilterBarProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Pressable onPress={onPressSort} style={styles.actionButton}>
          <Text style={styles.actionText}>{sortLabel}</Text>
        </Pressable>
        <Pressable onPress={onPressFilters} style={styles.actionButton}>
          <Icon name="filter" color={theme.colors.primaryDark} size={14} />
          <Text style={styles.actionText}>
            فلتر بحث {filterCount > 0 ? `(${filterCount})` : ""}
          </Text>
        </Pressable>
      </View>
      {tags.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tags}>
          {tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.sm
  },
  actions: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.sm
  },
  actionButton: {
    minHeight: theme.touchTarget,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.xs
  },
  actionText: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: "right"
  },
  tags: {
    flexDirection: "row-reverse",
    gap: theme.spacing.sm
  },
  tag: {
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs
  },
  tagText: {
    ...theme.typography.caption,
    color: theme.colors.primaryDark
  }
});
