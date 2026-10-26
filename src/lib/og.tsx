import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const HEBREW = /[\u0590-\u05FF]/;
const LTR_RUN = /[A-Za-z0-9]+|[^A-Za-z0-9]+/g;

/**
 * Satori has no bidi support, so RTL lines are passed in visual order.
 * Handles Hebrew words with embedded Latin/digits ("ה-AI", "2030:"),
 * but not several consecutive Latin words, so keep titles to one Latin word in a row.
 */
function toVisual(line: string): string {
  if (!HEBREW.test(line)) return line;
  return line
    .split(" ")
    .reverse()
    .map((word) =>
      (word.match(LTR_RUN) ?? [])
        .reverse()
        .map((run) => (/^[A-Za-z0-9]+$/.test(run) ? run : [...run].reverse().join("")))
        .join(""),
    )
    .join(" ");
}

let assets: Promise<{ black: Buffer; medium: Buffer; logo: string }> | undefined;

function loadAssets() {
  assets ??= Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Heebo-Black.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/Heebo-Medium.ttf")),
    readFile(join(process.cwd(), "public/brand/botiphone-logo-white.png")),
  ]).then(([black, medium, logo]) => ({ black, medium, logo: `data:image/png;base64,${logo.toString("base64")}` }));
  return assets;
}

/**
 * @param lines the H1, already split into lines; the last line is drawn in gold
 * @param eyebrow small label above the title
 */
export async function ogImage(lines: string[], eyebrow = "מרכזיית ענן חכמה לעסקים") {
  const { black, medium, logo } = await loadAssets();
  const longest = Math.max(...lines.map((l) => l.length));
  const fontSize = longest > 28 ? 60 : longest > 22 ? 70 : 82;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "64px 80px",
          backgroundColor: "#0e2240",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(201,154,62,0.28), transparent 45%), radial-gradient(circle at 100% 100%, rgba(59,99,167,0.45), transparent 55%)",
          fontFamily: "Heebo",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={320} height={56} alt="" />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              color: "#e2c27d",
              marginBottom: 24,
              padding: "8px 22px",
              borderRadius: 999,
              border: "1px solid rgba(201,154,62,0.5)",
            }}
          >
            {toVisual(eyebrow)}
          </div>
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                fontSize,
                fontWeight: 900,
                lineHeight: 1.2,
                color: i === lines.length - 1 && lines.length > 1 ? "#e2c27d" : "#ffffff",
              }}
            >
              {toVisual(line)}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", fontSize: 26, fontWeight: 500, color: "#cbd5e1" }}>
          <div style={{ display: "flex" }}>{site.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex", width: 120, height: 6, borderRadius: 3, backgroundColor: "#c99a3e" }} />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Heebo", data: black, weight: 900, style: "normal" },
        { name: "Heebo", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
