import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "מרכזייה בזק או סנטריקס? עוברים לענן ושומרים על אותו מספר | BotiPhone";

export default function Image() {
  return ogImage(["מרכזייה בזק או סנטריקס?", "עוברים לענן ושומרים על אותו מספר"]);
}
