import React, { useEffect } from "react";
import {
  I18nManager,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { theme } from "./styles/theme";
import { flows } from "./utils/navigation/flow";
import { t } from "./utils/i18n";

const App = (): React.JSX.Element => {
  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{t("appName")} - UX/UI Revamp</Text>
        <Text style={styles.subtitle}>{t("courseCycle")}</Text>
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
  content: {
    padding: theme.spacing.md,
    gap: theme.spacing.md
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
