import Link from "next/link";
import {
  Bot,
  Building2,
  HeartHandshake,
  Headphones,
  Phone,
  Settings2,
  Stethoscope,
  Store,
  TrendingUp,
  User,
} from "lucide-react";
import type { ExampleIcon, FlowStep, UseCase } from "@/lib/examples";
import { products } from "@/lib/products";

const icons: Record<ExampleIcon, React.ReactNode> = {
  clinic: <Stethoscope className="w-6 h-6" />,
  office: <Building2 className="w-6 h-6" />,
  shop: <Store className="w-6 h-6" />,
  service: <Headphones className="w-6 h-6" />,
  sales: <TrendingUp className="w-6 h-6" />,
  community: <HeartHandshake className="w-6 h-6" />,
};

const who: Record<FlowStep["who"], { label: string; icon: React.ReactNode; tone: string }> = {
  caller: { label: "המתקשר", icon: <Phone className="w-3.5 h-3.5" />, tone: "bg-white/10 text-gray-200" },
  system: { label: "המרכזייה", icon: <Settings2 className="w-3.5 h-3.5" />, tone: "bg-brand-secondary/25 text-blue-100" },
  agent: { label: "נציג", icon: <User className="w-3.5 h-3.5" />, tone: "bg-emerald-500/15 text-emerald-200" },
  bot: { label: "בוט AI", icon: <Bot className="w-3.5 h-3.5" />, tone: "bg-brand-primary/20 text-brand-accent" },
};

export default function UseCaseCard({ useCase, showProducts = true }: { useCase: UseCase; showProducts?: boolean }) {
  return (
    <article id={useCase.id} className="glass-panel rounded-2xl p-6 md:p-8 h-full flex flex-col scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-primary/15 text-brand-accent flex items-center justify-center shrink-0">
          {icons[useCase.icon]}
        </div>
        <h3 className="text-xl font-bold text-white">{useCase.business}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed mb-6">{useCase.need}</p>

      <ol className="relative space-y-3 mb-6 border-r border-white/10 pr-4">
        {useCase.flow.map((step, i) => (
          <li key={i} className="relative">
            <span className="absolute -right-[21px] top-2 w-2.5 h-2.5 rounded-full bg-brand-primary ring-4 ring-brand-dark" />
            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full mb-1 ${who[step.who].tone}`}>
              {who[step.who].icon}
              {who[step.who].label}
            </span>
            <p className="text-gray-200 text-sm leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>

      <p className="text-white font-medium leading-relaxed mt-auto">
        <span className="text-brand-accent">התוצאה: </span>
        {useCase.outcome}
      </p>

      {showProducts && (
        <div className="flex flex-wrap gap-2 mt-5">
          {useCase.products.map((href) => {
            const p = products.find((x) => x.href === href);
            if (!p) return null;
            return (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-300 hover:border-brand-primary/60 hover:text-white transition-colors"
              >
                {p.label}
              </Link>
            );
          })}
        </div>
      )}
    </article>
  );
}
