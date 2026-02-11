import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { Card } from "../atoms";
import { DiscussionComment } from "../../types/domain";

type DiscussionThreadProps = {
  comments: DiscussionComment[];
};

const CommentNode = ({ comment, level = 0 }: { comment: DiscussionComment; level?: number }) => {
  return (
    <View style={[styles.comment, level > 0 && styles.nested]}>
      <Text style={styles.author}>{comment.author}</Text>
      <Text style={styles.message}>{comment.message}</Text>
      <Text style={styles.date}>{comment.createdAt}</Text>
      {comment.replies?.map((reply) => (
        <CommentNode key={reply.id} comment={reply} level={level + 1} />
      ))}
    </View>
  );
};

export const DiscussionThread = ({ comments }: DiscussionThreadProps): React.JSX.Element => {
  return (
    <Card>
      <Text style={styles.title}>ساحة النقاش</Text>
      {comments.map((comment) => (
        <CommentNode key={comment.id} comment={comment} />
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    ...theme.typography.h3,
    color: theme.colors.text,
    textAlign: "right",
    marginBottom: theme.spacing.sm
  },
  comment: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    marginTop: theme.spacing.sm,
    backgroundColor: theme.colors.surfaceMuted
  },
  nested: {
    marginRight: theme.spacing.md
  },
  author: {
    ...theme.typography.body,
    color: theme.colors.primaryDark,
    textAlign: "right"
  },
  message: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginTop: theme.spacing.xs,
    textAlign: "right"
  },
  date: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
    textAlign: "right"
  }
});
