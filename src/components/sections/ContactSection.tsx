import { FC } from "react";
import { SectionProps } from "@/types";
import { C } from "@/theme/colors";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactLink from "@/components/ui/ContactLink";

const links = [
  { label: "EMAIL",    value: "rohaidahmed123@gmail.com",          href: "mailto:rohaidahmed123@gmail.com" },
  { label: "PHONE",    value: "+92 319 754 7207",                   href: "tel:+923197547207" },
  { label: "LINKEDIN", value: "linkedin.com/in/rohaid-ahmed-mirza", href: "https://linkedin.com/in/rohaid-ahmed-mirza-11a35721a" },
  { label: "GITHUB",   value: "github.com/RohaidAhmed",             href: "https://github.com/RohaidAhmed" },
];

const ContactSection: FC<SectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    style={{ paddingTop: 120, paddingBottom: 100 }}
  >
    <SectionHeader
      number="05"
      title="Let's Talk"
      sub="Open to roles, freelance, and interesting collaborations."
    />

    <div style={{ maxWidth: 560, display: "flex", flexDirection: "column", gap: 11 }}>
      {links.map((l) => (
        <ContactLink key={l.label} label={l.label} value={l.value} href={l.href} />
      ))}
    </div>

    {/* Footer */}
    <div
      style={{
        marginTop: 72, paddingTop: 36,
        borderTop: `1px solid ${C.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}
    >
      <span style={{ fontFamily: "monospace", fontSize: 11.5, color: C.muted }}>
        © 2025 Rohaid Ahmed Mirza — Built with Next.js + TypeScript
      </span>
      <span style={{ fontFamily: "monospace", fontSize: 11, color: C.dim }}>
        Rawalpindi, PK
      </span>
    </div>
  </section>
);

export default ContactSection;
