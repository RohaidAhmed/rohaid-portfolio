import { FC } from "react";
import { SectionHeaderProps } from "@/types";
import { C } from "@/theme/colors";

const SectionHeader: FC<SectionHeaderProps> = ({ number, title, sub }) => (
  <div style={{ marginBottom: 44 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: C.accent,
          letterSpacing: "0.18em",
        }}
      >
        {number}.
      </span>
      <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em" }}>{title}</h2>
    </div>
    <p style={{ color: C.muted, fontSize: 14 }}>{sub}</p>
  </div>
);

export default SectionHeader;
