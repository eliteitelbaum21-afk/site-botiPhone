import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "מרכזיה בענן לעסק: כל התקשורת במקום אחד | BotiPhone";

export default function Image() {
  return ogImage(["מרכזיה בענן לעסק:", "כל התקשורת במקום אחד"]);
}
