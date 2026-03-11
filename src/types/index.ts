// ─── Shared TypeScript Types ──────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  desc: string;
  stack: string[];
  color: string;
  year: string;
  status?: string;
  link?: string;
  featured?: boolean;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  type: "FT" | "INT" | "CONTRACT";
  bullets: string[];
}

export interface SkillCategory {
  [category: string]: string[];
}

export interface NavDotProps {
  active: boolean;
}

export interface TagProps {
  text: string;
  color: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ExperienceCardProps {
  job: Job;
  index: number;
}

export interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
}

export interface GlitchTextProps {
  text: string;
  style?: React.CSSProperties;
}

export interface TypeWriterProps {
  text: string;
  speed?: number;
  onDone?: () => void;
}

export interface SectionHeaderProps {
  number: string;
  title: string;
  sub: string;
}

export interface NavProps {
  activeSection: string;
  scrollY: number;
  sections: string[];
  scrollTo: (id: string) => void;
}

export interface HeroSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  scrollTo: (id: string) => void;
}

export interface SectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}
