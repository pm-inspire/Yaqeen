import { ScreenKey } from "./screens";

export type FlowStage = {
  id: string;
  title: string;
  screens: ScreenKey[];
};

export const flows: FlowStage[] = [
  {
    id: "discovery",
    title: "Discovery & Navigation",
    screens: ["home", "stageSelector", "sortOptions", "searchFilters"]
  },
  {
    id: "engagement",
    title: "Course Engagement",
    screens: [
      "courseDetailsGuest",
      "login",
      "shareCourse",
      "subscribeStepOne",
      "subscribeStepTwo",
      "rateCourseTeacher"
    ]
  },
  {
    id: "search",
    title: "Search Experience",
    screens: ["searchResults", "searchEmpty"]
  },
  {
    id: "dashboard",
    title: "User Dashboard",
    screens: ["favorites", "courseDetailsSubscriber", "myLessons"]
  },
  {
    id: "community",
    title: "Community & Content",
    screens: ["discussionForums", "postComments", "unitLessons", "lessonDetails"]
  },
  {
    id: "additional",
    title: "Additional Features",
    screens: [
      "extendedCourseInfo",
      "messages",
      "moreMenu",
      "myOrders",
      "support",
      "aboutUs",
      "logout"
    ]
  }
];
