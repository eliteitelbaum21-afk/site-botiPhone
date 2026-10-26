import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "סוכן AI טלפוני שעונה, מבין וסוגר עניינים | BotiPhone";

export default function Image() {
  return ogImage(["סוכן AI טלפוני", "שעונה, מבין וסוגר עניינים"]);
}
