# BotiPhone — אתר שיווקי

אתר שיווקי מרובה-עמודים ב-Next.js 15 (App Router) + TypeScript + Tailwind CSS 4, מותאם SEO ועברית RTL.

## הרצה

```bash
npm install
npm run dev      # פיתוח - http://localhost:3000
npm run build    # בניית פרודקשן
npm start        # הרצת פרודקשן
```

## מבנה

- `src/app/` — עמודים: דף בית, `/voice-bot`, `/campaigns`, `/cloud-pbx`, `/pricing`, `/blog`, `/contact`
- `src/lib/blog.ts` — תוכן המאמרים (להוספת מאמר — מוסיפים אובייקט למערך)
- `src/lib/site.ts` — פרטי העסק: טלפון, אימייל, כתובת, דומיין
- `src/app/api/contact/route.ts` — API לטופס צור קשר

## טופס צור קשר

ליד מהטופס ומהצ'אט נשמר ב-CRM: `POST https://pbx.botiphone.com/api/public/leads`.
המפתח נוצר בהגדרות → קליטת לידים, מתחיל ב-`bk_`, ונשמר ב-`LEADS_API_KEY`.
בלי מפתח הטופס מחזיר שגיאה ולא מדווח שהפנייה התקבלה.

```
LEADS_API_KEY=bk_...
# אופציונלי — גובר על מקור ברירת המחדל של המפתח
# LEADS_SOURCE_ID=12
NEXT_PUBLIC_SITE_URL=הדומיין של האתר (לקנוניקל ול-sitemap)
```

## SEO

- Metadata ייחודי + canonical לכל עמוד
- JSON-LD: Organization, Service, Product+Offers, FAQPage, Article, BreadcrumbList
- `sitemap.xml` ו-`robots.txt` אוטומטיים
- רינדור סטטי מלא (SSG) לכל העמודים
