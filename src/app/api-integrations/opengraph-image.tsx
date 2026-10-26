import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "אוטומציה וחיבור למערכות העסק | BotiPhone";

export default function Image() {
  return ogImage(["אוטומציה וחיבור", "למערכות העסק"]);
}
