import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { courses } from "../data/mockData";
import { useFavoritesStore } from "../store/favoritesStore";
import { theme } from "../styles/theme";
import { Button, Card } from "../components/atoms";
import { HomeTemplate } from "../components/templates";
import { FilterBar } from "../components/organisms";
import { ScreenScaffold } from "./ScreenScaffold";

export const HomeScreen = (): React.JSX.Element => {
  const [search, setSearch] = useState("");
  const favoriteIds = useFavoritesStore((state) => state.courseIds);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const filtered = useMemo(
    () => courses.filter((course) => course.title.includes(search) || search.length === 0),
    [search]
  );

  return (
    <HomeTemplate
      title="الرئيسية"
      courses={filtered}
      searchValue={search}
      onChangeSearch={setSearch}
      favoriteIds={favoriteIds}
      onToggleFavorite={toggleFavorite}
    />
  );
};

export const StageSelectorScreen = (): React.JSX.Element => (
  <ScreenScaffold
    title="تحديد المرحلة والصف الدراسي"
    subtitle="اختر المرحلة المناسبة لعرض المحتوى المتوافق"
  >
    <View style={styles.group}>
      <Card>
        <Text style={styles.optionTitle}>المرحلة الثانوية</Text>
        <Text style={styles.optionSubtitle}>الصف الأول والثاني والثالث الثانوي</Text>
      </Card>
      <Card>
        <Text style={styles.optionTitle}>المرحلة المتوسطة</Text>
        <Text style={styles.optionSubtitle}>الصف الأول والثاني والثالث المتوسط</Text>
      </Card>
      <Button label="تأكيد الاختيار" />
    </View>
  </ScreenScaffold>
);

export const SortOptionsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="ترتيب حسب" subtitle="تحكم بسرعة الوصول للمحتوى المناسب">
    <FilterBar sortLabel="الأعلى تقييما" tags={["الأعلى تقييما", "الأقل سعرا", "الأحدث"]} />
  </ScreenScaffold>
);

export const SearchFiltersScreen = (): React.JSX.Element => (
  <ScreenScaffold title="فلتر بحث" subtitle="اختر المادة والسعر والتقييم ونوع الدورة">
    <View style={styles.group}>
      <Card>
        <Text style={styles.optionTitle}>المواد</Text>
        <Text style={styles.optionSubtitle}>فيزياء - رياضيات - إحصاء - برمجة Python</Text>
      </Card>
      <Card>
        <Text style={styles.optionTitle}>السعر</Text>
        <Text style={styles.optionSubtitle}>مجاني - أقل من 250 - أكثر من 250</Text>
      </Card>
      <Button label="تطبيق الفلاتر" />
    </View>
  </ScreenScaffold>
);

const styles = StyleSheet.create({
  group: {
    gap: theme.spacing.sm
  },
  optionTitle: {
    ...theme.typography.bodyLg,
    color: theme.colors.text,
    textAlign: "right"
  },
  optionSubtitle: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: "right",
    marginTop: theme.spacing.xs
  }
});
