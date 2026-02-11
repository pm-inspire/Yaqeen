import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Icon } from "../atoms";

type TabKey = "home" | "courses" | "favorites" | "messages" | "more";

type BottomNavigationProps = {
  activeTab: TabKey;
  onChangeTab?: (tab: TabKey) => void;
};

const tabs: { key: TabKey; label: string; icon: TabKey }[] = [
  { key: "home", label: "الرئيسية", icon: "home" },
  { key: "courses", label: "الدورات", icon: "courses" },
  { key: "favorites", label: "المفضلة", icon: "favorites" },
  { key: "messages", label: "المحادثة", icon: "messages" },
  { key: "more", label: "المزيد", icon: "more" }
];

export const BottomNavigation = ({
  activeTab,
  onChangeTab
}: BottomNavigationProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <Pressable key={tab.key} onPress={() => onChangeTab?.(tab.key)} style={styles.tab}>
            <Icon
              name={tab.icon}
              color={active ? theme.colors.primary : theme.colors.textSecondary}
              size={18}
            />
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    justifyContent: "space-between"
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: theme.touchTarget,
    minWidth: 64
  },
  label: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: 2
  },
  activeLabel: {
    color: theme.colors.primaryDark,
    fontWeight: "600"
  }
});
