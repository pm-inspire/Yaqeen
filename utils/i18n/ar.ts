export const ar = {
  appName: "يقين",
  home: "الرئيسية",
  courses: "الدورات",
  favorites: "المفضلة",
  messages: "المحادثة",
  more: "المزيد",
  noData: "لا يوجد بيانات",
  payNow: "ادفع الآن",
  subtotal: "سعر الشرح",
  vat: "ضريبة القيمة المضافة",
  total: "الإجمالي",
  courseCycle: "دورة ← فترة ← معلم ← وحدة ← درس",
  searchPlaceholder: "ابحث عن دورة أو معلم",
  sortBy: "ترتيب حسب",
  filters: "فلتر بحث",
  login: "تسجيل الدخول",
  support: "احصل على مساعدة",
  aboutUs: "من نحن",
  logout: "تسجيل الخروج"
} as const;

export type TranslationKey = keyof typeof ar;
