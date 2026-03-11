import { FC } from "react";
import { SectionProps } from "@/types";
import { experience } from "@/data/experience";
import { C } from "@/theme/colors";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Tag from "@/components/ui/Tag";

const coursework = [
  "AI", "Neural Networks", "Embedded Systems",
  "DSP", "Networking", "Algorithms", "Control Systems",
];

const certifications: [string, string][] = [
  ["Next.js App Router Fundamentals",   "Nextjs.org"],
  ["Next.js Pages Router Fundamentals", "Nextjs.org"],
  ["Crash Course on Python",            "Coursera (Google)"],
];

const ExperienceSection: FC<SectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    style={{ paddingTop: 120, paddingBottom: 80 }}
  >
    <SectionHeader
      number="04"
      title="Experience"
      sub="Where I've worked and what I've built."
    />

    {/* Work history */}
    <div>
      {experience.map((job, i) => (
        <ExperienceCard key={i} job={job} index={i} />
      ))}
    </div>

    {/* Education */}
    <div
      style={{
        marginTop: 52,
        border: `1px solid ${C.border}`,
        borderRadius: 8, padding: "28px 32px",
        background: C.surface,
      }}
    >
      <div
        style={{
          fontSize: 10, letterSpacing: "0.18em",
          color: C.yellow, marginBottom: 12, fontFamily: "monospace",
        }}
      >
        EDUCATION
      </div>
      <div
        style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: 8,
        }}
      >
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>BS Computer Engineering</div>
          <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>COMSATS University Islamabad</div>
        </div>
        <span style={{ fontSize: 11, color: C.muted, fontFamily: "monospace" }}>2019 – 2023</span>
      </div>
      <div style={{ marginTop: 14, fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
        <span style={{ color: C.text, fontWeight: 600 }}>Final Year Project: </span>
        Smartphone-Based Detection of Retinal Abnormalities — led a team developing a mobile/web
        application integrating AI algorithms for early detection of diabetic retinopathy.
      </div>
      <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 7 }}>
        {coursework.map((c) => (
          <Tag key={c} text={c} color={C.yellow} />
        ))}
      </div>
    </div>

    {/* Certifications */}
    <div
      style={{
        marginTop: 20,
        border: `1px solid ${C.border}`,
        borderRadius: 8, padding: "22px 28px",
        background: C.surface,
      }}
    >
      <div
        style={{
          fontSize: 10, letterSpacing: "0.18em",
          color: C.blue, marginBottom: 16, fontFamily: "monospace",
        }}
      >
        CERTIFICATIONS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {certifications.map(([name, issuer]) => (
          <div
            key={name}
            style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.text }}
          >
            <span>{name}</span>
            <span style={{ color: C.muted, fontFamily: "monospace", fontSize: 11 }}>{issuer}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
