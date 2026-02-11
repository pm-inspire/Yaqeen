import { Course, DiscussionComment, Teacher } from "../types/domain";

const teachers: Teacher[] = [
  {
    id: "t1",
    name: "أ. محمد القحطاني",
    subject: "فيزياء",
    rating: 4.7
  },
  {
    id: "t2",
    name: "أ. نورة الشهري",
    subject: "برمجة Python",
    rating: 4.6
  }
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "الفيزياء الشاملة - الفصل الدراسي الأول",
    teacher: teachers[0],
    lecturesCount: 14,
    semestersCount: 1,
    hoursCount: 12,
    priceSAR: 250,
    rating: 4.6,
    reviewsCount: 34,
    isPaid: true
  },
  {
    id: "c2",
    title: "الإحصاء التطبيقي للمرحلة الثانوية",
    teacher: teachers[1],
    lecturesCount: 10,
    semestersCount: 1,
    hoursCount: 9,
    priceSAR: 199,
    rating: 4.5,
    reviewsCount: 28
  }
];

export const comments: DiscussionComment[] = [
  {
    id: "m1",
    author: "ليان",
    message: "هل يوجد ملخص للوحدة الثانية؟",
    createdAt: "اليوم",
    replies: [
      {
        id: "m1-r1",
        author: "المعلم",
        message: "نعم، سيتم رفعه نهاية الأسبوع.",
        createdAt: "منذ ساعة"
      }
    ]
  },
  {
    id: "m2",
    author: "سلمان",
    message: "تم إضافة بنك الأسئلة الجديد.",
    createdAt: "أمس"
  }
];
