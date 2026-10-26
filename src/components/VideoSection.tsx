import { PlayCircle } from "lucide-react";
import Reveal from "./Reveal";
import { videosFor } from "@/lib/videos";

interface VideoSectionProps {
  page: string;
  title?: string;
}

/** Renders the training videos of a page; renders nothing until videos exist. */
export default function VideoSection({ page, title = "רואים איך זה עובד" }: VideoSectionProps) {
  const list = videosFor(page);
  if (list.length === 0) return null;

  return (
    <section className="py-24 bg-brand-deep border-y border-white/5" aria-labelledby={`videos-${page}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold mb-3">
              <PlayCircle className="w-5 h-5" /> סרטוני הדרכה
            </div>
            <h2 id={`videos-${page}`} className="text-3xl md:text-4xl font-bold">
              {title}
            </h2>
          </div>
        </Reveal>
        <div className={`grid gap-8 ${list.length > 1 ? "md:grid-cols-2" : "max-w-3xl mx-auto"}`}>
          {list.map((v) => (
            <Reveal key={v.youtubeId}>
              <figure className="glass-panel rounded-2xl overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <figcaption className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-lg text-white">{v.title}</h3>
                    {v.duration && <span className="text-sm text-gray-400 shrink-0">{v.duration}</span>}
                  </div>
                  {v.description && <p className="text-gray-400 mt-2 leading-relaxed">{v.description}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
