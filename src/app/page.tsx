import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import {
  ExamplesPreview,
  InnovationSection,
  MigrationBanner,
  PbxBasics,
  TwoPaths,
} from "@/components/home/HomeSections";
import BlogPreview from "@/components/home/BlogPreview";
import TrustBar from "@/components/home/TrustBar";
import ClientLogos from "@/components/home/ClientLogos";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import { site } from "@/lib/site";

const homeTitle = `מרכזייה לעסק בענן — הדור הבא של המרכזיות | ${site.name}`;
const homeDescription =
  "מרכזייה לעסק בענן: מרכזייה טלפונית עם תפריט קולי, שלוחות, נציגים והקלטות, ונציג דיגיטלי שעונה בעברית. מרכזיה לעסק בלי חומרה, עם המספר הקיים. מרכזיית טלפון שעולה לאוויר תוך ימים.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { title: homeTitle, description: homeDescription, url: site.url },
  twitter: { title: homeTitle, description: homeDescription },
};

const homeFaq = [
  {
    question: "מה זה מרכזייה לעסק בענן?",
    answer:
      "מרכזייה בענן (מרכזייה וירטואלית) עושה את כל מה שמרכזייה רגילה עושה: מספר לעסק, פתיח ותפריט קולי, שלוחות לעובדים, תור המתנה והקלטות. ההבדל הוא שהיא לא יושבת בארון במשרד אלא בשרתים מאובטחים, ומנהלים אותה מהדפדפן.",
  },
  {
    question: "אפשר לשמור על המספר שיש לנו היום?",
    answer:
      "כן. מניידים את המספר הקיים, גם ממרכזייה של בזק או מכל ספק אחר. עד שהניוד מסתיים המרכזייה הקיימת ממשיכה לעבוד, כך שאין השבתה.",
  },
  {
    question: "אנחנו צריכים רק מרכזייה רגילה. חייבים AI?",
    answer:
      "ממש לא. אפשר לעבוד עם מרכזייה פשוטה: תפריט, שלוחות, נציגים, הקלטות ודוחות. היכולות החכמות, כמו בוט קולי וקמפיינים, נשארות כבויות עד שתחליטו להפעיל אותן.",
  },
  {
    question: "כמה זמן לוקחת ההקמה?",
    answer:
      "ברוב המקרים ימים בודדים. אנחנו מקימים יחד איתכם את התפריט, השלוחות והנציגים, בודקים, ורק אז מעבירים את המספר.",
  },
  {
    question: "מאיפה העובדים עונים לשיחות?",
    answer:
      "מטלפון שולחני, מטלפון בדפדפן, מהנייד או מהאפליקציה. העובד יכול לענות מהבית עם המספר של העסק.",
  },
  {
    question: "אפשר לנסות את המערכת?",
    answer:
      "כן. הניסיון מתחיל בשיחה עם נציג: משאירים פרטים באתר, או מתקשרים, ועוברים יחד על מה שמתאים לעסק.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientLogos />
      <PbxBasics />
      <TwoPaths />
      <MigrationBanner />
      <InnovationSection />
      <ExamplesPreview />
      <TestimonialsSection />
      <HowItWorks />
      <BlogPreview />
      <FaqSection items={homeFaq} title="שאלות נפוצות על מרכזייה לעסק" />
      <CtaSection
        title="בואו נבנה לכם מרכזייה"
        subtitle="השאירו פרטים או התקשרו. ניסיון מתחיל בשיחה עם נציג."
      />
    </>
  );
}
