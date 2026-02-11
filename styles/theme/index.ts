import { colors } from "./colors";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  spacing,
  typography,
  shadows,
  radius: {
    sm: 10,
    md: 14,
    lg: 18,
    pill: 999
  },
  touchTarget: 44
} as const;

export type Theme = typeof theme;
