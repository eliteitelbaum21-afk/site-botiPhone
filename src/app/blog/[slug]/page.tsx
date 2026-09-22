import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import CtaSection from "@/components/CtaSection";
import { getAllPosts, getPostBySlug, type ContentBlock } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
    },
  };
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2>
          <RichText text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3>
          <RichText text={block.text} />
        </h3>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "he",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.keywords.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
      { "@type": "ListItem", position: 2, name: "מרכז ידע", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <article className="pt-32 pb-16 lg:pt-40">
        <header className="relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="ניווט משני">
              <Link href="/" className="hover:text-brand-accent transition-colors">
                דף הבית
              </Link>
              <ArrowLeft className="w-3 h-3" />
              <Link href="/blog" className="hover:text-brand-accent transition-colors">
                מרכז ידע
              </Link>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <time dateTime={post.date} className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("he-IL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed border-r-4 border-brand-primary pr-5">
              {post.description}
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 article-body">
          {post.content.map((block, idx) => (
            <ContentBlockView key={idx} block={block} />
          ))}
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-brand-deep border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">מאמרים נוספים</h2>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium"
            >
              לכל המאמרים <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-colors group flex flex-col"
              >
                <div
                  className={`h-32 relative bg-gradient-to-br ${rel.gradient} flex items-center justify-center`}
                >
                  <rel.Icon className="w-12 h-12 text-white/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-brand-accent transition-colors leading-snug">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
