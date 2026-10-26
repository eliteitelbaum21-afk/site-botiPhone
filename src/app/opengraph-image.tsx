import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "BotiPhone — הדור הבא של המרכזיות כבר כאן.";

export default function Image() {
  return ogImage(["הדור הבא של המרכזיות", "כבר כאן."]);
}
