import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Course } from "../../types/domain";
import { theme } from "../../styles/theme";
import { SearchBar } from "../molecules";
import { BottomNavigation, CourseList, FilterBar } from "../organisms";

type HomeTemplateProps = {
  title: string;
  courses: Course[];
  searchValue: string;
  onChangeSearch: (value: string) => void;
  onToggleFavorite?: (courseId: string) => void;
  favoriteIds?: string[];
};

export const HomeTemplate = ({
  title,
  courses,
  searchValue,
  onChangeSearch,
  onToggleFavorite,
  favoriteIds
}: HomeTemplateProps): React.JSX.Element => {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <SearchBar
          value={searchValue}
          onChangeText={onChangeSearch}
          placeholder="ابحث عن دورة أو معلم"
        />
        <FilterBar sortLabel="ترتيب حسب" tags={["الأعلى تقييما", "الأحدث", "الأقل سعرا"]} />
        <CourseList
          courses={courses}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
        />
      </ScrollView>
      <BottomNavigation activeTab="home" />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  content: {
    padding: theme.spacing.md,
    gap: theme.spacing.md
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    textAlign: "right"
  }
});
