import React from "react";
import { comments, courses } from "../data/mockData";
import { DiscussionThread } from "../components/organisms";
import { LessonCard } from "../components/molecules";
import { ScreenScaffold } from "./ScreenScaffold";

export const DiscussionForumsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="ساحات النقاش" subtitle="اسأل وتفاعل مع المجتمع التعليمي">
    <DiscussionThread comments={comments} />
  </ScreenScaffold>
);

export const PostCommentsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="تعليقات منشور" subtitle="عرض كامل للتعليقات والردود">
    <DiscussionThread comments={comments.slice(0, 1)} />
  </ScreenScaffold>
);

export const UnitLessonsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="شروحات الوحدة" subtitle="محتوى الوحدة وتوزيع المحاضرات">
    <LessonCard title="الوحدة الأولى - شرح 1" durationMinutes={35} lecturesCount={7} statusLabel="متاح" />
    <LessonCard title="الوحدة الأولى - شرح 2" durationMinutes={40} lecturesCount={7} statusLabel="متاح" />
  </ScreenScaffold>
);

export const LessonDetailsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="تفاصيل الشرح" subtitle="عدد المحاضرات: 14 • عدد الفصول: 1 • عدد الساعات: 12">
    <LessonCard title={courses[0].title} durationMinutes={45} lecturesCount={14} statusLabel="مباشر" />
  </ScreenScaffold>
);
