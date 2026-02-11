import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Badge, Card, Icon } from "../atoms";

type LessonCardProps = {
  title: string;
  durationMinutes: number;
  lecturesCount: number;
  statusLabel?: string;
};

export const LessonCard = ({
  title,
  durationMinutes,
  lecturesCount,
  statusLabel
}: LessonCardProps): React.JSX.Element => {
  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {statusLabel ? <Badge label={statusLabel} tone="success" /> : null}
      </View>
      <View style={styles.meta}>
        <View style={styles.metaItem}>
          <Icon name="clock" color={theme.colors.textSecondary} />
          <Text style={styles.metaText}>المدة: {durationMinutes} دقيقة</Text>
        </View>
        <View style={styles.metaItem}>
          <Icon name="lesson" color={theme.colors.textSecondary} />
          <Text style={styles.metaText}>المحاضرات: {lecturesCount}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm
  },
  title: {
    ...theme.typography.bodyLg,
    color: theme.colors.text,
    textAlign: "right",
    flex: 1
  },
  meta: {
    marginTop: theme.spacing.sm,
    flexDirection: "row-reverse",
    gap: theme.spacing.md
  },
  metaItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.xs
  },
  metaText: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary
  }
});
