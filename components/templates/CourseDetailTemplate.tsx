import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Course } from "../../types/domain";
import { theme } from "../../styles/theme";
import { Button } from "../atoms";
import { LessonCard, RatingDisplay, TeacherProfile } from "../molecules";
import { PaymentSummary } from "../organisms";

type CourseDetailTemplateProps = {
  course: Course;
  isSubscriber: boolean;
  onEnroll?: () => void;
};

export const CourseDetailTemplate = ({
  course,
  isSubscriber,
  onEnroll
}: CourseDetailTemplateProps): React.JSX.Element => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <TeacherProfile teacher={course.teacher} />
      <View style={styles.metrics}>
        <Text style={styles.metric}>عدد المحاضرات: {course.lecturesCount}</Text>
        <Text style={styles.metric}>عدد الفصول: {course.semestersCount}</Text>
        <Text style={styles.metric}>عدد الساعات: {course.hoursCount}</Text>
      </View>
      <RatingDisplay rating={course.rating} reviewsCount={course.reviewsCount} />

      {isSubscriber ? (
        <LessonCard
          title="مقدمة الوحدة الأولى"
          durationMinutes={45}
          lecturesCount={course.lecturesCount}
          statusLabel="متاح"
        />
      ) : (
        <PaymentSummary subtotalSAR={521.74} vatSAR={78.26} totalSAR={600} onPayNow={onEnroll} />
      )}

      {!isSubscriber ? <Button label="عرض المزيد من التفاصيل" variant="secondary" /> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    gap: theme.spacing.md
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    textAlign: "right"
  },
  metrics: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  metric: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: "right",
    marginTop: theme.spacing.xs
  }
});
