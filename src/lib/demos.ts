/**
 * Recorded demo calls with the bot, shown with a synced transcript.
 * Adding a recording = one object here + the mp3 in public/audio/demos/
 * (128kbps, English file name). A page shows the demo section only when
 * at least one demo lists it in `pages`, so nothing renders while empty.
 */
export interface DemoLine {
  who: "caller" | "bot" | "agent";
  text: string;
  /** seconds from the start of the recording */
  at: number;
}

export interface BotDemo {
  /** e.g. "clinic-appointment" */
  id: string;
  /** e.g. "מרפאה — קביעת תור" */
  title: string;
  /** tab label, e.g. "מרפאת שיניים" */
  business: string;
  /** e.g. "/audio/demos/clinic-appointment.mp3" */
  audio: string;
  /** as shown to the visitor, e.g. "1:24" */
  duration: string;
  lines: DemoLine[];
  /** e.g. ["/", "/voice-bot"] */
  pages: string[];
}

export const demos: BotDemo[] = [];

export const demosFor = (page: string) => demos.filter((d) => d.pages.includes(page));
