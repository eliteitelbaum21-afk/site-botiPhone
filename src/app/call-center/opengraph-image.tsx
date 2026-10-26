import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "מוקד טלפוני בענן: אף שיחה לא נשארת בלי מענה | BotiPhone";

export default function Image() {
  return ogImage(["מוקד טלפוני בענן:", "אף שיחה לא נשארת בלי מענה"]);
}
