import React from "react";
import { Text } from "react-native";

type IconName =
  | "home"
  | "courses"
  | "favorites"
  | "messages"
  | "more"
  | "star"
  | "filter"
  | "search"
  | "teacher"
  | "clock"
  | "lesson"
  | "empty";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

const iconMap: Record<IconName, string> = {
  home: "⌂",
  courses: "▤",
  favorites: "♥",
  messages: "✉",
  more: "⋯",
  star: "★",
  filter: "☰",
  search: "⌕",
  teacher: "👤",
  clock: "⏱",
  lesson: "▶",
  empty: "○"
};

export const Icon = ({ name, size = 16, color = "#000" }: IconProps): React.JSX.Element => (
  <Text style={{ fontSize: size, color }}>{iconMap[name]}</Text>
);
