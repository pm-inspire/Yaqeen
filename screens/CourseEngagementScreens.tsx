import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { courses } from "../data/mockData";
import { Button, Card, Input } from "../components/atoms";
import { RatingDisplay } from "../components/molecules";
import { PaymentSummary, SubscriptionFlow } from "../components/organisms";
import { CourseDetailTemplate } from "../components/templates";
import { useEnrollmentStore } from "../store/enrollmentStore";
import { theme } from "../styles/theme";
import { ScreenScaffold } from "./ScreenScaffold";

export const CourseDetailsGuestScreen = (): React.JSX.Element => {
  const setCart = useEnrollmentStore((state) => state.setCart);
  return (
    <CourseDetailTemplate
      course={courses[0]}
      isSubscriber={false}
      onEnroll={() =>
        setCart({
          periodId: "p-1",
          title: courses[0].title,
          subtotal: 521.74,
          vat: 78.26,
          total: 600
        })
      }
    />
  );
};

export const LoginScreen = (): React.JSX.Element => (
  <ScreenScaffold title="تسجيل الدخول" subtitle="سجّل للدخول وإكمال الاشتراك">
    <View style={styles.stack}>
      <Input label="رقم الجوال" placeholder="05XXXXXXXX" keyboardType="phone-pad" />
      <Input label="كلمة المرور" placeholder="••••••••" secureTextEntry />
      <Button label="تسجيل الدخول" />
    </View>
  </ScreenScaffold>
);

export const ShareCourseScreen = (): React.JSX.Element => (
  <ScreenScaffold title="مشاركة الدورة" subtitle="شارك رابط الدورة مع أصدقائك">
    <Card>
      <Text style={styles.label}>انسخ الرابط أو شارك مباشرة على التطبيقات</Text>
      <Text style={styles.value}>https://yaqeen.app/course/physics-1</Text>
      <View style={styles.row}>
        <Button label="نسخ الرابط" variant="secondary" />
        <Button label="مشاركة الآن" />
      </View>
    </Card>
  </ScreenScaffold>
);

export const SubscribeStepOneScreen = (): React.JSX.Element => (
  <ScreenScaffold title="الاشتراك في الفترة - الخطوة الأولى" subtitle="مراجعة تفاصيل الاشتراك">
    <SubscriptionFlow
      steps={[
        { id: "one", title: "المراجعة", description: "تحقق من تفاصيل الدورة والفترة." },
        { id: "two", title: "الدفع", description: "أكمل عملية الدفع لتفعيل الاشتراك." }
      ]}
      activeStepIndex={0}
    />
  </ScreenScaffold>
);

export const SubscribeStepTwoScreen = (): React.JSX.Element => (
  <ScreenScaffold title="الاشتراك في الفترة - الخطوة الثانية" subtitle="تأكيد الدفع">
    <PaymentSummary subtotalSAR={521.74} vatSAR={78.26} totalSAR={600} />
  </ScreenScaffold>
);

export const RateCourseTeacherScreen = (): React.JSX.Element => (
  <ScreenScaffold title="تقييم الدورة والمعلم" subtitle="ساعدنا بتحسين جودة المحتوى">
    <Card>
      <Text style={styles.label}>تقييمك الحالي</Text>
      <RatingDisplay rating={4.6} reviewsCount={34} />
      <View style={styles.row}>
        <Button label="إرسال التقييم" />
      </View>
    </Card>
  </ScreenScaffold>
);

const styles = StyleSheet.create({
  stack: {
    gap: theme.spacing.sm
  },
  row: {
    marginTop: theme.spacing.md,
    flexDirection: "row-reverse",
    gap: theme.spacing.sm
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: "right"
  },
  value: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: "right",
    marginTop: theme.spacing.xs
  }
});
