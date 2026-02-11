import { ViewStyle } from "react-native";

export const shadows: Record<string, ViewStyle> = {
  card: {
    shadowColor: "#0A1A1A",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },
  floating: {
    shadowColor: "#0A1A1A",
    shadowOpacity: 0.16,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5
  }
};
