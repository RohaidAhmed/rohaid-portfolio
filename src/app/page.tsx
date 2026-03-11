// import Portfolio from "@/components/portfolio";

// export default function Home() {
//   return (
//     <div>
//       <Portfolio/>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { C } from "@/theme/colors";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

const SECTIONS = ["home", "projects", "skills", "experience", "contact"] as const;
type Section = (typeof SECTIONS)[number];

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [scrollY, setScrollY] = useState<number>(0);
  const refs = useRef<Partial<Record<Section, HTMLElement | null>>>({});

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const current = SECTIONS.find((id) => {
        const el = refs.current[id];
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 130 && bottom > 130;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    refs.current[id as Section]?.scrollIntoView({ behavior: "smooth" });

  const ref = (id: Section) => (el: HTMLElement | null) => {
    refs.current[id] = el;
  };

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", fontFamily: "'Syne','DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080c10; }
        @keyframes blink   { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(22px) } to { opacity:1; transform:none } }
        @keyframes pulse   { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c10; }
        ::-webkit-scrollbar-thumb { background: #1e2a3a; border-radius: 2px; }
      `}</style>

      {/* ── Background effects ── */}
      {/* CRT noise */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      {/* Ambient glows */}
      <div style={{ position: "fixed", top: "20%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.accent}08 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, #f43f5e08 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />

      {/* ── Navigation ── */}
      <Navbar
        activeSection={activeSection}
        scrollY={scrollY}
        sections={[...SECTIONS]}
        scrollTo={scrollTo}
      />

      {/* ── Main content ── */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>
        <HeroSection sectionRef={ref("home")} scrollTo={scrollTo} />
        <ProjectsSection sectionRef={ref("projects")} />
        <SkillsSection sectionRef={ref("skills")} />
        <ExperienceSection sectionRef={ref("experience")} />
        <ContactSection sectionRef={ref("contact")} />
      </div>
    </div>
  );
}
