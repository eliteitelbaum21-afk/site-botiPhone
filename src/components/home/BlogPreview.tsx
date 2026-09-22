import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-24 bg-brand-card relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">מרכז ידע ומאמרים</h2>
              <p className="text-gray-400 text-lg">
                תובנות, מדריכים וחדשות מעולם הבוטים הקוליים, הקמפיינים והמרכזיות בענן.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium flex-shrink-0"
            >
              לכל המאמרים <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="bg-brand-dark rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-colors group flex flex-col h-full"
              >
                <div className={`h-40 relative bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <post.Icon className="w-16 h-16 text-white/80" />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/blog"
          className="md:hidden mt-8 w-full flex justify-center items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium"
        >
          לכל המאמרים <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
