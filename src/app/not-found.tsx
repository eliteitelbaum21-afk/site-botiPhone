import Link from "next/link";
import { Bot } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-brand-primary/20 flex items-center justify-center mb-8">
          <Bot className="w-10 h-10 text-brand-primary" />
        </div>
        <h1 className="text-6xl font-black mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-400 mb-8">
          העמוד שחיפשתם לא נמצא — אבל הבוט שלנו תמיד עונה.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </section>
  );
}
