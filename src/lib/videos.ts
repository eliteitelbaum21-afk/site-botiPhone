/**
 * Training videos shown on the product pages.
 * Adding a video = adding one object here. A page shows its videos only when
 * at least one matches its `pages` list, so empty sections never render.
 * Plan of the series: project doc 11-training-videos.
 */
export interface TrainingVideo {
  /** YouTube video id (the part after watch?v=) */
  youtubeId: string;
  /** The customer's question the video answers — used as the title */
  title: string;
  description?: string;
  /** Product pages this video appears on, e.g. ["/ivr", "/cloud-pbx"] */
  pages: string[];
  /** Duration as shown to the visitor, e.g. "3:20" */
  duration?: string;
}

export const videos: TrainingVideo[] = [
  // Example (uncomment and fill the id after uploading to YouTube):
  // {
  //   youtubeId: "XXXXXXXXXXX",
  //   title: "כמה שיחות נכנסו היום? מי ענה?",
  //   description: "נציגים — היסטוריה, הקלטות, תמלול, סיכום AI וסטטיסטיקות בדף אחד.",
  //   pages: ["/call-center", "/call-recording"],
  //   duration: "5:00",
  // },
];

export function videosFor(page: string): TrainingVideo[] {
  return videos.filter((v) => v.pages.includes(page));
}
