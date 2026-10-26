import Image from "next/image";
import { visibleClients } from "@/lib/clients";

/** Grayscale logo strip; renders nothing until there are at least 4 logos. */
export default function ClientLogos() {
  const list = visibleClients();
  if (list.length === 0) return null;

  return (
    <section className="py-10" aria-label="לקוחות שעובדים איתנו">
      <ul className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {list.map((c) => (
          <li key={c.name}>
            <Image
              src={c.logo}
              alt={c.name}
              width={120}
              height={40}
              className="h-9 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
