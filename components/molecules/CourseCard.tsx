import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Course } from "../../types/domain";
import { theme } from "../../styles/theme";
import { Badge, Card, Icon } from "../atoms";
import { PriceTag } from "./PriceTag";
import { RatingDisplay } from "./RatingDisplay";
import { TeacherProfile } from "./TeacherProfile";

type CourseCardVariant = "list" | "grid";
type SubscriptionVariant = "subscribed" | "unsubscribed";

type CourseCardProps = {
  course: Course;
  layout?: CourseCardVariant;
  subscription?: SubscriptionVariant;
  onPress?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
};

export const CourseCard = ({
  course,
  layout = "list",
  subscription = "unsubscribed",
  onPress,
  onToggleFavorite,
  isFavorite = false
}: CourseCardProps): React.JSX.Element => {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      <Card style={[layout === "grid" && styles.grid]}>
        <View style={styles.headerRow}>
          <View style={styles.headerActions}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="إضافة للمفضلة"
              onPress={onToggleFavorite}
              style={styles.favoriteButton}
            >
              <Icon
                name="favorites"
                color={isFavorite ? theme.colors.error : theme.colors.disabled}
                size={16}
              />
            </Pressable>
            {subscription === "subscribed" ? <Badge label="مدفوعة" tone="success" /> : null}
          </View>
          <RatingDisplay rating={course.rating} reviewsCount={course.reviewsCount} />
        </View>

        <Text numberOfLines={2} style={styles.title}>
          {course.title}
        </Text>

        <TeacherProfile teacher={course.teacher} />

        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Icon name="lesson" color={theme.colors.textSecondary} />
            <Text style={styles.metaText}>محاضرات: {course.lecturesCount}</Text>
          </View>
          <View style={styles.metaItem}>
            <Icon name="clock" color={theme.colors.textSecondary} />
            <Text style={styles.metaText}>ساعات: {course.hoursCount}</Text>
          </View>
        </View>

        <PriceTag amountSAR={course.priceSAR} subtitle={`فصول: ${course.semestersCount}`} />
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grid: {
    minHeight: 280
  },
  headerRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerActions: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.sm
  },
  favoriteButton: {
    width: theme.touchTarget,
    height: theme.touchTarget,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    ...theme.typography.h3,
    color: theme.colors.text,
    textAlign: "right",
    marginTop: theme.spacing.sm
  },
  meta: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.md,
    marginTop: theme.spacing.md
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
