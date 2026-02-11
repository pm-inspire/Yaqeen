import { TextStyle } from "react-native";

export const typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700"
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700"
  },
  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600"
  },
  bodyLg: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: "400"
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400"
  },
  caption: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "400"
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600"
  }
};
