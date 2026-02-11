import React from "react";
import { ScreenKey } from "../utils/navigation/screens";
import {
  HomeScreen,
  SearchFiltersScreen,
  SortOptionsScreen,
  StageSelectorScreen
} from "./DiscoveryScreens";
import {
  CourseDetailsGuestScreen,
  LoginScreen,
  RateCourseTeacherScreen,
  ShareCourseScreen,
  SubscribeStepOneScreen,
  SubscribeStepTwoScreen
} from "./CourseEngagementScreens";
import { EmptySearchScreen, SearchResultsScreen } from "./SearchScreens";
import {
  CourseDetailsSubscriberScreen,
  FavoritesScreen,
  MyLessonsScreen
} from "./DashboardScreens";
import {
  DiscussionForumsScreen,
  LessonDetailsScreen,
  PostCommentsScreen,
  UnitLessonsScreen
} from "./CommunityScreens";
import {
  AboutUsScreen,
  ExtendedCourseInfoScreen,
  LogoutScreen,
  MessagesScreen,
  MoreMenuScreen,
  MyOrdersScreen,
  SupportScreen
} from "./AdditionalScreens";

type ScreenComponent = () => React.JSX.Element;

export type ScreenDefinition = {
  key: ScreenKey;
  title: string;
  group: string;
  Component: ScreenComponent;
};

export const screenDefinitions: ScreenDefinition[] = [
  { key: "home", title: "الرئيسية", group: "Discovery & Navigation", Component: HomeScreen },
  {
    key: "stageSelector",
    title: "تحديد المرحلة والصف الدراسي",
    group: "Discovery & Navigation",
    Component: StageSelectorScreen
  },
  {
    key: "sortOptions",
    title: "ترتيب حسب",
    group: "Discovery & Navigation",
    Component: SortOptionsScreen
  },
  {
    key: "searchFilters",
    title: "فلتر بحث",
    group: "Discovery & Navigation",
    Component: SearchFiltersScreen
  },
  {
    key: "courseDetailsGuest",
    title: "تفاصيل الدورة لغير المشتركين",
    group: "Course Engagement",
    Component: CourseDetailsGuestScreen
  },
  { key: "login", title: "تسجيل الدخول", group: "Course Engagement", Component: LoginScreen },
  {
    key: "shareCourse",
    title: "مشاركة الدورة",
    group: "Course Engagement",
    Component: ShareCourseScreen
  },
  {
    key: "subscribeStepOne",
    title: "الاشتراك في الفترة الخطوة الأولى",
    group: "Course Engagement",
    Component: SubscribeStepOneScreen
  },
  {
    key: "subscribeStepTwo",
    title: "الاشتراك في الفترة الخطوة الثانية",
    group: "Course Engagement",
    Component: SubscribeStepTwoScreen
  },
  {
    key: "rateCourseTeacher",
    title: "تقييم الدورة والمعلم",
    group: "Course Engagement",
    Component: RateCourseTeacherScreen
  },
  {
    key: "searchResults",
    title: "نتائج البحث",
    group: "Search Experience",
    Component: SearchResultsScreen
  },
  {
    key: "searchEmpty",
    title: "البحث بدون نتائج",
    group: "Search Experience",
    Component: EmptySearchScreen
  },
  { key: "favorites", title: "المفضلة", group: "User Dashboard", Component: FavoritesScreen },
  {
    key: "courseDetailsSubscriber",
    title: "تفاصيل الدورة للمشتركين",
    group: "User Dashboard",
    Component: CourseDetailsSubscriberScreen
  },
  { key: "myLessons", title: "شروحاتي", group: "User Dashboard", Component: MyLessonsScreen },
  {
    key: "discussionForums",
    title: "ساحات النقاش",
    group: "Community & Content",
    Component: DiscussionForumsScreen
  },
  {
    key: "postComments",
    title: "تعليقات منشور",
    group: "Community & Content",
    Component: PostCommentsScreen
  },
  {
    key: "unitLessons",
    title: "شروحات الوحدة",
    group: "Community & Content",
    Component: UnitLessonsScreen
  },
  {
    key: "lessonDetails",
    title: "تفاصيل الشرح",
    group: "Community & Content",
    Component: LessonDetailsScreen
  },
  {
    key: "extendedCourseInfo",
    title: "مزيد من التفاصيل للدورة",
    group: "Additional Features",
    Component: ExtendedCourseInfoScreen
  },
  { key: "messages", title: "المحادثة", group: "Additional Features", Component: MessagesScreen },
  { key: "moreMenu", title: "المزيد", group: "Additional Features", Component: MoreMenuScreen },
  {
    key: "myOrders",
    title: "طلباتي",
    group: "Additional Features",
    Component: MyOrdersScreen
  },
  { key: "support", title: "احصل على مساعدة", group: "Additional Features", Component: SupportScreen },
  { key: "aboutUs", title: "من نحن", group: "Additional Features", Component: AboutUsScreen },
  { key: "logout", title: "تسجيل الخروج", group: "Additional Features", Component: LogoutScreen }
];

export const screenByKey = screenDefinitions.reduce<Record<ScreenKey, ScreenDefinition>>(
  (acc, definition) => {
    acc[definition.key] = definition;
    return acc;
  },
  {} as Record<ScreenKey, ScreenDefinition>
);
