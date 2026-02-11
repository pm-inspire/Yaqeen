import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Input, Icon } from "../atoms";
import { theme } from "../../styles/theme";

type SearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  onOpenFilters?: () => void;
};

export const SearchBar = ({
  value,
  onChangeText,
  placeholder = "ابحث",
  onOpenFilters
}: SearchBarProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Input value={value} onChangeText={onChangeText} placeholder={placeholder} />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="فتح الفلاتر"
        onPress={onOpenFilters}
        style={styles.filterButton}
      >
        <Icon name="filter" color={theme.colors.surface} size={18} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    gap: theme.spacing.sm
  },
  filterButton: {
    width: theme.touchTarget,
    height: theme.touchTarget,
    borderRadius: theme.radius.md,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary
  }
});
