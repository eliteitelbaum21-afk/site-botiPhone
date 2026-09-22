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

כל ליד נשמר תמיד ל-`data/leads.jsonl`. לשליחת מייל — מעתיקים את `.env.example` ל-`.env` וממלאים את הגדרות ה-SMTP:

```
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
CONTACT_EMAIL=כתובת שאליה יישלחו הלידים
NEXT_PUBLIC_SITE_URL=הדומיין של האתר (לקנוניקל ול-sitemap)
```

## SEO

- Metadata ייחודי + canonical לכל עמוד
- JSON-LD: Organization, Service, Product+Offers, FAQPage, Article, BreadcrumbList
- `sitemap.xml` ו-`robots.txt` אוטומטיים
- רינדור סטטי מלא (SSG) לכל העמודים
