import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "מרכז ידע — מאמרים על בוט טלפוני, קמפיינים ומרכזיה בענן",
  description:
    "מדריכים, השוואות וטיפים מעולם התקשורת העסקית: בוט טלפוני, מענה קולי חכם, קמפיין שיחות אוטומטי, מרכזיה בענן ובקרת איכות שיחות עם AI.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "מרכז ידע | BotiPhone",
    description:
      "מדריכים והשוואות מעולם הבוטים הקוליים, הקמפיינים והמרכזיות בענן.",
    url: absoluteUrl("/blog"),
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `מרכז הידע של ${site.name}`,
    url: absoluteUrl("/blog"),
    description:
      "מאמרים ומדריכים על בוט טלפוני, קמפיינים אוטומטיים ומרכזיה בענן.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.date,
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />

      <section className="relative pt-32 pb-16 lg:pt-44 overflow-hidden bg-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              מרכז <span className="text-gradient">ידע ומאמרים</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              מדריכים, השוואות ותובנות מעולם הבוטים הקוליים, הקמפיינים האוטומטיים
              והמרכזיות בענן — כל מה שעסק צריך לדעת על תקשורת חכמה.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Reveal key={post.slug} delay={(idx % 3) * 0.08}>
                <article className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-colors group flex flex-col h-full"
                  >
                    <div
                      className={`h-44 relative bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                    >
                      <post.Icon className="w-16 h-16 text-white/80" />
                      <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {post.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("he-IL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="מעדיפים לדבר במקום לקרוא?"
        subtitle="השאירו פרטים ונחזור אליכם בהקדם — בלי מצגות ארוכות."
      />
    </>
  );
}
