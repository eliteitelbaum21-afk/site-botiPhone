import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "CRM ומנוע נתונים משותף | BotiPhone";

export default function Image() {
  return ogImage(["CRM ומנוע נתונים", "משותף"]);
}
