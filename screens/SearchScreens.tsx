import React from "react";
import { courses } from "../data/mockData";
import { CourseList } from "../components/organisms";
import { EmptyState, SearchBar } from "../components/molecules";
import { ScreenScaffold } from "./ScreenScaffold";

export const SearchResultsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="نتائج البحث" subtitle="تم العثور على نتائج مطابقة">
    <SearchBar value="فيزياء" onChangeText={() => undefined} />
    <CourseList courses={courses} />
  </ScreenScaffold>
);

export const EmptySearchScreen = (): React.JSX.Element => (
  <ScreenScaffold title="البحث بدون نتائج" subtitle="لا يوجد بيانات">
    <EmptyState
      title="لا يوجد بيانات"
      description="جرّب تغيير الكلمات المفتاحية أو إزالة بعض الفلاتر."
      ctaLabel="عرض كل الدورات"
    />
  </ScreenScaffold>
);
