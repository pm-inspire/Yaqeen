import { create } from "zustand";

type FavoritesState = {
  courseIds: string[];
  toggleFavorite: (courseId: string) => void;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesState>((set) => ({
  courseIds: [],
  toggleFavorite: (courseId) =>
    set((state) => {
      const exists = state.courseIds.includes(courseId);
      return {
        courseIds: exists
          ? state.courseIds.filter((id) => id !== courseId)
          : [...state.courseIds, courseId]
      };
    }),
  clearFavorites: () => set({ courseIds: [] })
}));
