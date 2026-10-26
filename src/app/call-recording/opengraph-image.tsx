import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "הקלטת שיחות ותמלול לעסק | BotiPhone";

export default function Image() {
  return ogImage(["הקלטת שיחות", "ותמלול לעסק"]);
}
