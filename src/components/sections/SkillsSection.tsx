import { FC } from "react";
import { SectionProps } from "@/types";
import { skills } from "@/data/skills";
import { C } from "@/theme/colors";
import SectionHeader from "@/components/ui/SectionHeader";

const SkillsSection: FC<SectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    style={{ paddingTop: 120, paddingBottom: 80 }}
  >
    <SectionHeader
      number="03"
      title="Tech Stack"
      sub="Tools and technologies I work with daily."
    />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
      {Object.entries(skills).map(([cat, items]) => (
        <div
          key={cat}
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "22px 24px",
            background: C.surface,
          }}
        >
          <div
            style={{
              fontSize: 10, letterSpacing: "0.2em",
              color: C.accent, marginBottom: 14, fontFamily: "monospace",
            }}
          >
            {cat.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {items.map((sk) => (
              <div
                key={sk}
                style={{
                  padding: "4px 12px",
                  border: `1px solid ${C.dim}`,
                  borderRadius: 3, fontSize: 12.5,
                  color: C.text, fontFamily: "monospace",
                }}
              >
                {sk}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
