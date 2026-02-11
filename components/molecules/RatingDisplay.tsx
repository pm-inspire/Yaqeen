import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "../atoms";
import { theme } from "../../styles/theme";

type RatingDisplayProps = {
  rating: number;
  reviewsCount?: number;
  size?: "sm" | "md";
};

export const RatingDisplay = ({
  rating,
  reviewsCount,
  size = "md"
}: RatingDisplayProps): React.JSX.Element => {
  const rounded = Math.round(rating * 10) / 10;
  return (
    <View style={styles.container}>
      <Icon name="star" color={theme.colors.star} size={size === "md" ? 16 : 14} />
      <Text style={[styles.rating, size === "sm" && styles.ratingSm]}>{rounded}</Text>
      {typeof reviewsCount === "number" ? (
        <Text style={[styles.reviews, size === "sm" && styles.reviewsSm]}>({reviewsCount})</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4
  },
  rating: {
    ...theme.typography.body,
    color: theme.colors.text
  },
  ratingSm: {
    ...theme.typography.caption
  },
  reviews: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary
  },
  reviewsSm: {
    fontSize: 12
  }
});
