import React, { useEffect, useMemo, useState } from "react";
import {
  I18nManager,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { screenByKey, screenDefinitions } from "./screens";
import { theme } from "./styles/theme";
import { ScreenKey } from "./utils/navigation/screens";
import { flows } from "./utils/navigation/flow";
import { t } from "./utils/i18n";

const App = (): React.JSX.Element => {
  const [activeScreenKey, setActiveScreenKey] = useState<ScreenKey>("home");

  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
    }
  }, []);

  const ActiveScreen = useMemo(
    () => screenByKey[activeScreenKey]?.Component ?? screenByKey.home.Component,
    [activeScreenKey]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t("appName")} - UX/UI Revamp</Text>
        <Text style={styles.subtitle}>{t("courseCycle")}</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.selector}>
        {screenDefinitions.map((screen) => {
          const isActive = screen.key === activeScreenKey;
          return (
            <Pressable
              key={screen.key}
              onPress={() => setActiveScreenKey(screen.key)}
              style={[styles.chip, isActive && styles.activeChip]}
            >
              <Text style={[styles.chipText, isActive && styles.activeChipText]}>{screen.title}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.preview}>
        <ActiveScreen />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {flows.map((flow) => (
          <View key={flow.id} style={styles.block}>
            <Text style={styles.flowTitle}>{flow.title}</Text>
            <Text style={styles.flowCount}>عدد الشاشات: {flow.screens.length}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  header: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    gap: theme.spacing.xs
  },
  content: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    gap: theme.spacing.sm
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
  },
  selector: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    gap: theme.spacing.sm
  },
  chip: {
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    minHeight: theme.touchTarget,
    paddingHorizontal: theme.spacing.md,
    justifyContent: "center"
  },
  activeChip: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primarySoft
  },
  chipText: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary
  },
  activeChipText: {
    color: theme.colors.primaryDark,
    fontWeight: "700"
  },
  preview: {
    flex: 1
  },
  block: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    ...theme.shadows.card
  },
  flowTitle: {
    ...theme.typography.h3,
    color: theme.colors.primaryDark,
    textAlign: "right"
  },
  flowCount: {
    ...theme.typography.body,
    marginTop: theme.spacing.sm,
    color: theme.colors.textSecondary,
    textAlign: "right"
  }
});

export default App;
