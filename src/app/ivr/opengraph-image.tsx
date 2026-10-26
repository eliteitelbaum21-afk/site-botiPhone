import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "מערכת IVR לעסק: כל שיחה מגיעה למקום הנכון | BotiPhone";

export default function Image() {
  return ogImage(["מערכת IVR לעסק:", "כל שיחה מגיעה למקום הנכון"]);
}
