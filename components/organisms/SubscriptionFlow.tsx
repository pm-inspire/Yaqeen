import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Button, Card } from "../atoms";

type SubscriptionStep = {
  id: string;
  title: string;
  description: string;
};

type SubscriptionFlowProps = {
  steps: SubscriptionStep[];
  activeStepIndex: number;
  onNext?: () => void;
  onBack?: () => void;
};

export const SubscriptionFlow = ({
  steps,
  activeStepIndex,
  onNext,
  onBack
}: SubscriptionFlowProps): React.JSX.Element => {
  const activeStep = steps[activeStepIndex];

  return (
    <Card>
      <View style={styles.indicatorRow}>
        {steps.map((step, index) => {
          const isActive = index === activeStepIndex;
          const isDone = index < activeStepIndex;
          return (
            <View key={step.id} style={styles.indicatorWrap}>
              <View style={[styles.dot, isDone && styles.done, isActive && styles.active]}>
                <Text style={styles.dotLabel}>{index + 1}</Text>
              </View>
              <Text style={[styles.stepTitle, isActive && styles.activeText]}>{step.title}</Text>
            </View>
          );
        })}
      </View>

      <Text style={styles.contentTitle}>{activeStep.title}</Text>
      <Text style={styles.contentDescription}>{activeStep.description}</Text>

      <View style={styles.actions}>
        <Button label="السابق" variant="secondary" onPress={onBack} />
        <Button label="التالي" onPress={onNext} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  indicatorRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    gap: theme.spacing.sm
  },
  indicatorWrap: {
    flex: 1,
    alignItems: "center",
    gap: theme.spacing.xs
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.border
  },
  done: {
    backgroundColor: theme.colors.success
  },
  active: {
    backgroundColor: theme.colors.primary
  },
  dotLabel: {
    ...theme.typography.caption,
    color: theme.colors.surface
  },
  stepTitle: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: "center"
  },
  activeText: {
    color: theme.colors.primaryDark,
    fontWeight: "700"
  },
  contentTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    textAlign: "right",
    marginTop: theme.spacing.md
  },
  contentDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: "right",
    marginTop: theme.spacing.xs
  },
  actions: {
    marginTop: theme.spacing.md,
    flexDirection: "row-reverse",
    gap: theme.spacing.sm
  }
});
