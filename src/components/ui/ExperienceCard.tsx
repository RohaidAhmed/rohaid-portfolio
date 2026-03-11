"use client";

import { FC, useState } from "react";
import { ExperienceCardProps } from "@/types";
import { C } from "@/theme/colors";

const typeColor: Record<string, string> = {
  FT:       C.green,
  INT:      C.yellow,
  CONTRACT: C.blue,
};

const ExperienceCard: FC<ExperienceCardProps> = ({ job, index }) => {
  const [open, setOpen] = useState(index === 0);
  const [hov, setHov]   = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      {/* Header row */}
      <div
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", cursor: "pointer",
          paddingLeft: hov ? 10 : 0, transition: "padding 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 10, fontFamily: "monospace", color: C.muted, width: 24 }}>
            0{index + 1}
          </span>
          <div>
            <div style={{ fontSize: 15, color: hov ? C.accent : C.text, fontWeight: 600, transition: "color 0.2s" }}>
              {job.role}
            </div>
            <div style={{ fontSize: 12.5, color: C.muted, marginTop: 2 }}>{job.company}</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 11, color: C.muted, fontFamily: "monospace" }}>{job.period}</span>
          <span
            style={{
              fontSize: 9, padding: "2px 7px", borderRadius: 2,
              background: `${typeColor[job.type]}22`, color: typeColor[job.type],
              fontFamily: "monospace", letterSpacing: "0.1em",
            }}
          >
            {job.type}
          </span>
          <span
            style={{
              color: C.muted, fontSize: 14,
              display: "inline-block",
              transform: open ? "rotate(90deg)" : "none",
              transition: "transform 0.25s",
            }}
          >
            ›
          </span>
        </div>
      </div>

      {/* Expandable bullets */}
      {open && (
        <ul style={{ paddingLeft: 38, paddingBottom: 20, margin: 0 }}>
          {job.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontSize: 13, color: C.muted, lineHeight: 1.7,
                paddingBottom: 4, listStyle: "none", position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: -14, color: C.accent, fontSize: 10 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
