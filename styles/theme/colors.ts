export const colors = {
  primary: "#2E9F98",
  primaryDark: "#247D78",
  primarySoft: "#DDF3F1",
  accent: "#F0B774",
  text: "#1B1F24",
  textSecondary: "#5D6774",
  surface: "#FFFFFF",
  surfaceMuted: "#F6F8FA",
  border: "#E2E8F0",
  success: "#1D9A62",
  warning: "#D9822B",
  error: "#C63737",
  info: "#2D7FF9",
  disabled: "#A7B0BB",
  overlay: "rgba(11, 18, 25, 0.32)",
  background: "#F3F7F7",
  star: "#F9B74E"
} as const;

export type ColorToken = keyof typeof colors;
