import React from "react";
import { StyleSheet, View } from "react-native";
import { Course } from "../../types/domain";
import { CourseCard } from "../molecules";
import { theme } from "../../styles/theme";

type CourseListProps = {
  courses: Course[];
  subscribed?: boolean;
  favoriteIds?: string[];
  onToggleFavorite?: (courseId: string) => void;
};

export const CourseList = ({
  courses,
  subscribed = false,
  favoriteIds = [],
  onToggleFavorite
}: CourseListProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          subscription={subscribed ? "subscribed" : "unsubscribed"}
          isFavorite={favoriteIds.includes(course.id)}
          onToggleFavorite={() => onToggleFavorite?.(course.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.sm
  }
});
