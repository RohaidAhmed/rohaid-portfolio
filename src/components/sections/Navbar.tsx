"use client";

import { FC } from "react";
import { NavProps } from "@/types";
import { C } from "@/theme/colors";
import NavDot from "@/components/ui/NavDot";

const Navbar: FC<NavProps> = ({ activeSection, scrollY, sections, scrollTo }) => (
  <nav
    style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrollY > 20 ? "rgba(8,12,16,0.93)" : "transparent",
      backdropFilter: scrollY > 20 ? "blur(14px)" : "none",
      borderBottom: scrollY > 20 ? `1px solid ${C.border}` : "none",
      transition: "all 0.35s ease",
      padding: "0 52px",
    }}
  >
    <div
      style={{
        maxWidth: 1120, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 60,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 13.5, color: C.accent,
          letterSpacing: "0.08em", fontWeight: 500,
        }}
      >
        RAM<span style={{ color: C.muted }}>_dev</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 30 }}>
        {sections
          .filter((s) => s !== "home")
          .map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13,
                color: activeSection === s ? C.accent : C.muted,
                fontFamily: "'Syne',sans-serif",
                letterSpacing: "0.06em",
                textTransform: "capitalize",
                transition: "color 0.2s",
                fontWeight: 500,
              }}
            >
              {s}
            </button>
          ))}
      </div>

      {/* Section dots */}
      <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
        {sections.map((s) => (
          <NavDot key={s} active={activeSection === s} />
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
