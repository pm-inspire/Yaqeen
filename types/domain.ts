export type Teacher = {
  id: string;
  name: string;
  subject: string;
  rating: number;
  avatarUrl?: string;
};

export type Course = {
  id: string;
  title: string;
  teacher: Teacher;
  lecturesCount: number;
  semestersCount: number;
  hoursCount: number;
  priceSAR: number;
  rating: number;
  reviewsCount: number;
  isPaid?: boolean;
};

export type DiscussionComment = {
  id: string;
  author: string;
  message: string;
  createdAt: string;
  replies?: DiscussionComment[];
};
