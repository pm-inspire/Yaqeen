import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Teacher } from "../../types/domain";
import { Badge, Icon } from "../atoms";
import { RatingDisplay } from "./RatingDisplay";

type TeacherProfileProps = {
  teacher: Teacher;
};

export const TeacherProfile = ({ teacher }: TeacherProfileProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Icon name="teacher" size={22} color={theme.colors.primaryDark} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{teacher.name}</Text>
        <View style={styles.metaRow}>
          <Badge label={teacher.subject} />
          <RatingDisplay rating={teacher.rating} size="sm" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.sm
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primarySoft
  },
  content: {
    flex: 1,
    gap: theme.spacing.xs
  },
  name: {
    ...theme.typography.bodyLg,
    color: theme.colors.text,
    textAlign: "right"
  },
  metaRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: theme.spacing.sm
  }
});
