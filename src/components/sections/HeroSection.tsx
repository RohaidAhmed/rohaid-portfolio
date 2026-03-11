"use client";

import { FC } from "react";
import { HeroSectionProps } from "@/types";
import { C } from "@/theme/colors";
import GlitchText from "@/components/ui/GlitchText";
import Terminal from "@/components/ui/Terminal";

const stats: [string, string][] = [
  ["2+", "Years exp."],
  ["8+", "Projects shipped"],
  ["2",  "Companies"],
  ["BS", "Computer Eng."],
];

const HeroSection: FC<HeroSectionProps> = ({ sectionRef, scrollTo }) => (
  <section
    ref={sectionRef}
    style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      paddingTop: 80,
    }}
  >
    <div style={{ animation: "fadeUp 0.75s ease both" }}>

      {/* Available badge */}
      <div
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "5px 14px",
          border: `1px solid ${C.accentMid}`,
          borderRadius: 20, marginBottom: 36,
          background: C.accentDim,
        }}
      >
        <div
          style={{
            width: 7, height: 7, borderRadius: "50%",
            background: C.accent,
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span style={{ fontSize: 11, color: C.accent, fontFamily: "monospace", letterSpacing: "0.12em" }}>
          AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(48px,7.5vw,90px)",
          fontWeight: 800, lineHeight: 1.0,
          letterSpacing: "-0.04em", marginBottom: 28,
        }}
      >
        <GlitchText text="Rohaid" />{" "}
        <span style={{ color: C.accent }}>Ahmed</span>
        <br />
        <span style={{ color: C.muted, fontWeight: 400 }}>Mirza.</span>
      </h1>

      {/* Sub-title */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div
          style={{
            height: 1, width: 40,
            background: `linear-gradient(90deg, ${C.accent}, transparent)`,
          }}
        />
        <span style={{ fontSize: 14, color: C.muted, fontFamily: "monospace", letterSpacing: "0.12em" }}>
          COMPUTER ENGINEER · FULL STACK DEVELOPER
        </span>
      </div>

      {/* Bio */}
      <p style={{ fontSize: 17, color: C.muted, maxWidth: 540, lineHeight: 1.75, marginBottom: 48, fontWeight: 400 }}>
        2+ years building scalable web applications and firmware solutions. Proficient in Python,
        C/C++, Next.js, React, and Django — from pixel-perfect frontends to distributed backends
        and embedded systems.
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 14, marginBottom: 64, flexWrap: "wrap" }}>
        <button
          onClick={() => scrollTo("projects")}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          style={{
            padding: "13px 30px", background: C.accent, color: "#000",
            border: "none", borderRadius: 4, fontSize: 13.5, fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.06em",
            fontFamily: "'Syne',sans-serif", transition: "all 0.2s",
          }}
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = C.accent;
            e.currentTarget.style.color = C.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = C.dim;
            e.currentTarget.style.color = C.text;
          }}
          style={{
            padding: "13px 30px", background: "transparent", color: C.text,
            border: `1px solid ${C.dim}`, borderRadius: 4, fontSize: 13.5,
            cursor: "pointer", letterSpacing: "0.06em",
            fontFamily: "'Syne',sans-serif", transition: "all 0.2s",
          }}
        >
          Get In Touch
        </button>
      </div>

      <Terminal />
    </div>

    {/* Stats row */}
    <div
      style={{
        display: "flex", gap: 52, marginTop: 60, paddingTop: 44,
        borderTop: `1px solid ${C.border}`, flexWrap: "wrap",
      }}
    >
      {stats.map(([val, label]) => (
        <div key={label}>
          <div style={{ fontSize: 26, fontWeight: 800, color: C.accent, letterSpacing: "-0.03em" }}>
            {val}
          </div>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 3, fontFamily: "monospace", letterSpacing: "0.06em" }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
