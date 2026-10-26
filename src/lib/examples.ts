/**
 * Example call flows by business type. Shown on /examples and on the product
 * pages they use (filtered by `products`). Every flow uses only features that
 * exist in the system today (project docs 02 / 09 / 14 / 15).
 */
export type ExampleIcon = "clinic" | "office" | "shop" | "service" | "sales" | "community";

export interface FlowStep {
  /** who acts in this step */
  who: "caller" | "system" | "agent" | "bot";
  text: string;
}

export interface UseCase {
  id: string;
  icon: ExampleIcon;
  business: string;
  need: string;
  flow: FlowStep[];
  outcome: string;
  /** product pages this example belongs to */
  products: string[];
}

export const useCases: UseCase[] = [
  {
    id: "clinic",
    icon: "clinic",
    business: "מרפאה או קליניקה",
    need: "הטלפון לא מפסיק לצלצל, והמזכירות לא מספיקות לענות לכולם בשעות העומס.",
    flow: [
      { who: "system", text: "\"שלום, הגעתם למרפאה. לקביעת תור הקישו 1, לתוצאות בדיקות 2, למזכירות 3\"" },
      { who: "caller", text: "מקיש 1" },
      { who: "system", text: "השיחה מצלצלת אצל כל המזכירות הפנויות. אם כולן תפוסות, המטופל ממתין בתור עם מוזיקה והודעה" },
      { who: "system", text: "אחרי שעות הפעילות: הודעת \"המרפאה סגורה\" עם השעות, ואפשרות להשאיר הודעה קולית" },
    ],
    outcome: "אף שיחה לא הולכת לאיבוד. המנהלת רואה באילו שעות הכי עמוס ומתי צריך עוד מזכירה.",
    products: ["/ivr", "/call-center", "/cloud-pbx"],
  },
  {
    id: "office",
    icon: "office",
    business: "משרד עורכי דין או רואי חשבון",
    need: "כל עובד צריך שלוחה משלו, גם כשהוא עובד מהבית, וחשוב לתעד מה נאמר בשיחות עם לקוחות.",
    flow: [
      { who: "system", text: "\"הגעתם למשרד. אם ידוע לכם מספר השלוחה, הקישו אותו עכשיו\"" },
      { who: "caller", text: "מקיש את השלוחה של רואה החשבון" },
      { who: "agent", text: "רואה החשבון עונה מהטלפון במשרד, מהנייד או מהדפדפן, עם אותו מספר של המשרד" },
      { who: "system", text: "השיחה מוקלטת ומתומללת, וסיכום קצר נשמר בהיסטוריה" },
    ],
    outcome: "המשרד עובד כרגיל מכל מקום, וכל שיחה עם לקוח מתועדת ונגישה בחיפוש.",
    products: ["/cloud-pbx", "/call-recording", "/pbx-migration"],
  },
  {
    id: "shop",
    icon: "shop",
    business: "חנות או עסק קטן",
    need: "שני עובדים, מספר אחד, ולקוחות ששואלים כל היום את אותן שאלות: שעות, כתובת, מלאי.",
    flow: [
      { who: "system", text: "\"לשעות פתיחה וכתובת הקישו 1, להזמנות הקישו 2\"" },
      { who: "caller", text: "מקיש 1" },
      { who: "system", text: "שומע הודעה מוקלטת עם השעות והכתובת. הפתיח נוצר מטקסט, בלי אולפן" },
      { who: "system", text: "מספר שמטריד שוב ושוב נכנס לרשימה שחורה ולא מגיע יותר לעובדים" },
    ],
    outcome: "העובדים עונים רק לשיחות שבאמת צריכות אותם.",
    products: ["/ivr", "/cloud-pbx"],
  },
  {
    id: "service",
    icon: "service",
    business: "מוקד שירות לקוחות",
    need: "עשרות נציגים, תורים, ומנהל שצריך לדעת בכל רגע מה קורה ואיך השירות נשמע.",
    flow: [
      { who: "bot", text: "בוט קולי שואל \"במה אפשר לעזור?\" ומבין תשובה חופשית בעברית" },
      { who: "system", text: "לפי התשובה, השיחה מנותבת לצוות הנכון (טכני, חשבונות, ביטולים)" },
      { who: "agent", text: "הנציג רואה מי מתקשר ואת השיחות הקודמות שלו" },
      { who: "system", text: "אחרי השיחה: תמלול, סיכום AI ונקודות לשיפור לנציג" },
    ],
    outcome: "פחות העברות בין נציגים, ובקרת איכות על כל שיחה בלי להאזין לכולן.",
    products: ["/call-center", "/voice-bot", "/call-recording", "/crm"],
  },
  {
    id: "sales",
    icon: "sales",
    business: "מוקד מכירות",
    need: "אלפי לידים ישנים שאף אחד לא הספיק לחזור אליהם.",
    flow: [
      { who: "system", text: "קמפיין יוצא מחייג לרשימת הלידים לפי שעות שהגדרתם" },
      { who: "bot", text: "הבוט מציג את ההצעה ושואל שתיים-שלוש שאלות סינון" },
      { who: "caller", text: "\"כן, זה מעניין אותי\"" },
      { who: "agent", text: "השיחה עוברת מיד לנציג מכירות פנוי, עם התשובות שהלקוח כבר נתן" },
    ],
    outcome: "הנציגים מדברים רק עם מי שמעוניין, וכל התוצאות נשמרות בדוח הקמפיין.",
    products: ["/campaigns", "/voice-bot", "/crm"],
  },
  {
    id: "community",
    icon: "community",
    business: "ארגון, עמותה או קו מידע",
    need: "הרבה מתקשרים, מעט אנשי צוות, ומידע שמתעדכן כל שבוע.",
    flow: [
      { who: "system", text: "תפריט קולי עם הודעות מעודכנות. מחליפים הודעה מהדפדפן בתוך דקה" },
      { who: "caller", text: "מקיש מספר זיהוי" },
      { who: "system", text: "המערכת בודקת את המספר מול השרת שלכם ומשמיעה תשובה אישית" },
      { who: "system", text: "כל בחירה בתפריט נספרת, ורואים בעץ סטטיסטיקה לאן הגיעו המתקשרים" },
    ],
    outcome: "קו מידע שעובד מסביב לשעון, עם נתונים אמיתיים על מה שהציבור מחפש.",
    products: ["/ivr", "/api-integrations"],
  },
];

export function useCasesFor(product: string): UseCase[] {
  return useCases.filter((u) => u.products.includes(product));
}
