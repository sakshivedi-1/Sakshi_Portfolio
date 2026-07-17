import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = ["AI & ML", "Generative AI", "Computer Vision"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#050F1A",
          backgroundImage:
            "radial-gradient(900px 520px at 82% -5%, rgba(0,194,255,0.20), transparent 60%)",
          color: "#E2EEF8",
          fontFamily: "sans-serif",
        }}
      >
        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#00C2FF",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              border: "2px solid #C9922A",
              color: "#C9922A",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            SV
          </div>
          <div style={{ display: "flex" }}>
            AI · Generative AI · Data Science
          </div>
        </div>

        {/* name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, lineHeight: 1 }}>
            Sakshi Vedi
          </div>
          <div style={{ display: "flex", fontSize: 42, color: "#00C2FF" }}>
            AI & ML Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#6B8CA8",
              maxWidth: 880,
              marginTop: 8,
            }}
          >
            MSc Artificial Intelligence & Machine Learning candidate at IIIT Lucknow.
          </div>
        </div>

        {/* tag pills */}
        <div style={{ display: "flex", gap: 18 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 9999,
                border: "1px solid #1A3352",
                backgroundColor: "rgba(13,31,51,0.7)",
                color: "#E2EEF8",
                fontSize: 26,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
