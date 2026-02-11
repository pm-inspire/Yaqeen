import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EmptyState } from "../components/molecules";
import { Button, Card } from "../components/atoms";
import { theme } from "../styles/theme";
import { ScreenScaffold } from "./ScreenScaffold";

export const ExtendedCourseInfoScreen = (): React.JSX.Element => (
  <ScreenScaffold title="مزيد من التفاصيل للدورة" subtitle="أهداف الدورة وخطة التعلم">
    <Card>
      <Text style={styles.title}>مخرجات التعلم</Text>
      <Text style={styles.text}>- فهم المفاهيم الأساسية للمادة</Text>
      <Text style={styles.text}>- حل واجبات وتطبيقات عملية</Text>
      <Text style={styles.text}>- الاستعداد للاختبارات النهائية</Text>
    </Card>
  </ScreenScaffold>
);

export const MessagesScreen = (): React.JSX.Element => (
  <ScreenScaffold title="المحادثة" subtitle="صندوق الرسائل">
    <EmptyState
      title="لا يوجد بيانات"
      description="لا توجد رسائل حالياً. ابدأ محادثة جديدة مع المعلم."
      ctaLabel="بدء محادثة"
    />
  </ScreenScaffold>
);

export const MoreMenuScreen = (): React.JSX.Element => (
  <ScreenScaffold title="المزيد" subtitle="إعدادات الحساب والتنقل">
    <View style={styles.stack}>
      <Button label="طلباتي" variant="secondary" />
      <Button label="احصل على مساعدة" variant="secondary" />
      <Button label="من نحن" variant="secondary" />
      <Button label="تسجيل الخروج" variant="ghost" />
    </View>
  </ScreenScaffold>
);

export const MyOrdersScreen = (): React.JSX.Element => (
  <ScreenScaffold title="طلباتي" subtitle="سجل الاشتراكات والمدفوعات">
    <Card>
      <Text style={styles.title}>اشتراك الفيزياء الشاملة</Text>
      <Text style={styles.text}>المبلغ: 600.00 SAR</Text>
      <Text style={styles.text}>الحالة: مدفوعة</Text>
    </Card>
  </ScreenScaffold>
);

export const SupportScreen = (): React.JSX.Element => (
  <ScreenScaffold title="احصل على مساعدة" subtitle="تواصل معنا عند الحاجة">
    <Card>
      <Text style={styles.title}>الدعم الفني</Text>
      <Text style={styles.text}>البريد: support@yaqeen.app</Text>
      <Text style={styles.text}>الهاتف: 9200XXXX</Text>
    </Card>
  </ScreenScaffold>
);

export const AboutUsScreen = (): React.JSX.Element => (
  <ScreenScaffold title="من نحن" subtitle="حول منصة يقين التعليمية">
    <Card>
      <Text style={styles.text}>
        منصة تعليمية تركّز على تقديم محتوى أكاديمي عالي الجودة للطلاب في المملكة العربية السعودية.
      </Text>
    </Card>
  </ScreenScaffold>
);

export const LogoutScreen = (): React.JSX.Element => (
  <ScreenScaffold title="تسجيل الخروج" subtitle="هل أنت متأكد من رغبتك في تسجيل الخروج؟">
    <View style={styles.row}>
      <Button label="إلغاء" variant="secondary" />
      <Button label="تأكيد تسجيل الخروج" />
    </View>
  </ScreenScaffold>
);

const styles = StyleSheet.create({
  stack: {
    gap: theme.spacing.sm
  },
  row: {
    flexDirection: "row-reverse",
    gap: theme.spacing.sm
  },
  title: {
    ...theme.typography.bodyLg,
    color: theme.colors.text,
    textAlign: "right"
  },
  text: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: "right",
    marginTop: theme.spacing.xs
  }
});
