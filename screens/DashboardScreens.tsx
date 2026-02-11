import React from "react";
import { courses } from "../data/mockData";
import { EmptyState, LessonCard } from "../components/molecules";
import { CourseList } from "../components/organisms";
import { CourseDetailTemplate } from "../components/templates";
import { useFavoritesStore } from "../store/favoritesStore";
import { ScreenScaffold } from "./ScreenScaffold";

export const FavoritesScreen = (): React.JSX.Element => {
  const favorites = useFavoritesStore((state) => state.courseIds);
  const favoriteCourses = courses.filter((course) => favorites.includes(course.id));

  return (
    <ScreenScaffold title="المفضلة" subtitle={favoriteCourses.length ? "دوراتك المحفوظة" : "لا يوجد بيانات"}>
      {favoriteCourses.length === 0 ? (
        <EmptyState
          title="لا يوجد بيانات"
          description="ابدأ بإضافة الدورات إلى المفضلة للوصول السريع."
          ctaLabel="استعرض الدورات"
        />
      ) : (
        <CourseList courses={favoriteCourses} />
      )}
    </ScreenScaffold>
  );
};

export const CourseDetailsSubscriberScreen = (): React.JSX.Element => (
  <CourseDetailTemplate course={courses[0]} isSubscriber />
);

export const MyLessonsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="شروحاتي" subtitle="تابع تقدمك في المحتوى المشترك">
    <LessonCard title="الوحدة الأولى - الحركة" durationMinutes={42} lecturesCount={14} statusLabel="مكتمل" />
    <LessonCard title="الوحدة الثانية - القوى" durationMinutes={38} lecturesCount={14} statusLabel="جديد" />
  </ScreenScaffold>
);
