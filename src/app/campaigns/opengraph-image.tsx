import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "חייגן אוטומטי והודעות קוליות: מוקד מכירות שלא ישן | BotiPhone";

export default function Image() {
  return ogImage(["חייגן אוטומטי והודעות קוליות:", "מוקד מכירות שלא ישן"]);
}
