'use client';

import { useState, useEffect, useRef, FC } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
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

interface Job {
    role: string;
    company: string;
    period: string;
    type: "FT" | "INT" | "CONTRACT";
    bullets: string[];
}

interface SkillCategory {
    [category: string]: string[];
}

interface NavDotProps {
    active: boolean;
}

interface TagProps {
    text: string;
    color: string;
}

interface ProjectCardProps {
    project: Project;
}

interface ExperienceCardProps {
    job: Job;
    index: number;
}

interface ContactLinkProps {
    label: string;
    value: string;
    href: string;
}

interface GlitchTextProps {
    text: string;
    style?: React.CSSProperties;
}

interface TypeWriterProps {
    text: string;
    speed?: number;
    onDone?: () => void;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const skills: SkillCategory = {
    Languages: ["Python", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    Frameworks: ["Next.js", "React.js", "Django", "Axios", "Pybind11"],
    Databases: ["PostgreSQL", "MySQL", "SQLite3", "Redis"],
    "Tools & Platforms": ["CMake", "Postman", "Git", "Linux", "Windows"],
    Concepts: ["REST APIs", "IPMI/BMC Firmware", "SSR", "CRUD", "OpenAPI", "RBAC", "JWT"],
};

const projects: Project[] = [
    {
        id: "01",
        name: "ERP System",
        desc: "Full-scale Enterprise Resource Planning system with 7 integrated modules: Finance, HR, Inventory, Procurement, Sales CRM, Manufacturing, and Analytics. Targeting sub-300ms API responses and 10K concurrent users.",
        stack: ["Next.js", "PostgreSQL", "Redis", "Sequelize", "JWT"],
        color: "#00ff88",
        year: "2026",
        status: "In Progress",
        featured: true,
    },
    {
        id: "02",
        name: "Task Manager",
        desc: "Full-stack task management app built with Next.js for both frontend and backend using server-side rendering powered by Node.js. Manage, track and organise tasks efficiently.",
        stack: ["Next.js", "Node.js", "SSR", "TypeScript"],
        color: "#38bdf8",
        year: "2025",
        link: "https://task-manager-rohaid.vercel.app/",
        featured: true,
    },
    {
        id: "03",
        name: "Invoice Dashboard",
        desc: "Centralised invoice management dashboard — view, track, and organise all your invoices in one place with a clean, data-driven UI.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        color: "#a78bfa",
        year: "2025",
        link: "https://invoice-dashboard-rohaid.vercel.app/",
        featured: true,
    },
    {
        id: "04",
        name: "Weather App",
        desc: "Responsive weather application that fetches real-time weather data by city using third-party REST APIs. Built with SSR and dynamic routing for improved SEO and cross-device UX.",
        stack: ["Next.js", "REST API", "SSR", "TypeScript"],
        color: "#fbbf24",
        year: "2025",
        link: "https://forcast-weather.vercel.app/",
    },
    {
        id: "05",
        name: "GitHub User Search",
        desc: "Search GitHub profiles and instantly view user details — repos, followers, bio and more — powered by the GitHub REST API.",
        stack: ["Next.js", "GitHub API", "TypeScript", "Tailwind CSS"],
        color: "#fb923c",
        year: "2025",
        link: "https://github-user-serach-rohaid.vercel.app/",
    },
    {
        id: "06",
        name: "Country Info App",
        desc: "Browse and explore detailed information about countries worldwide — population, region, capital, currencies and border nations — using the REST Countries API.",
        stack: ["Next.js", "REST API", "TypeScript", "Tailwind CSS"],
        color: "#34d399",
        year: "2025",
        link: "https://country-info-rohaid.vercel.app/",
    },
    {
        id: "07",
        name: "SDR Transceiver Web App",
        desc: "Full-stack application for an SDR-based transceiver with React/Django frontend-backend communication, C++ libraries bridged into Python via Pybind11.",
        stack: ["React.js", "Django", "Axios", "Pybind11", "C++"],
        color: "#f43f5e",
        year: "2024",
    },
    {
        id: "08",
        name: "Retinal Abnormality Detector",
        desc: "Final-year project: mobile/web application integrating AI algorithms for early detection of diabetic retinopathy using smartphone cameras.",
        stack: ["AI/ML", "Mobile", "Web", "Python"],
        color: "#e879f9",
        year: "2023",
    },
];

const experience: Job[] = [
    {
        role: "Junior Production Engineer (SW)",
        company: "Bcube (PVT) Ltd.",
        period: "April 2024 – Present",
        type: "FT",
        bullets: [
            "Developed a full-stack web app for an SDR-based transceiver using React.js and Django with Axios-based API communication.",
            "Built and integrated modular C++ libraries into Python using Pybind11; optimized NumPy interoperability and STL container handling.",
            "Configured CMake build systems for hybrid C++/Python modules targeting cross-platform deployment (Linux/Windows).",
            "Managed and debugged Python scripts for IPMI firmware: sensor monitoring, BMC commands, and hardware health checks.",
            "Designed and maintained an SQLite3 database for real-time IPMI sensor metrics with optimized SQL queries.",
            "Validated REST APIs for sensor data exchange (JSON/XML) using Postman and Python requests, ensuring OpenAPI compliance.",
        ],
    },
    {
        role: "Production Engineer Intern",
        company: "Bcube (PVT) Ltd.",
        period: "January 2024 – April 2024",
        type: "INT",
        bullets: [
            "Analyzed and modified the C4 architecture model for an active firmware project.",
            "Debugged Python scripts for sensor data logging; documented threshold configurations.",
            "Studied the customized PetaLinux boot process with NFS and TFTP.",
        ],
    },
    {
        role: "Technical Support Associate",
        company: "E-Square Services (Contract to PTCL)",
        period: "August 2023 – January 2024",
        type: "FT",
        bullets: [
            "Operated NMS platforms (Huawei NCE, ZTE Net Neuman) to manage Copper and Fiber Access Networks.",
            "Collaborated with cross-functional teams on monitoring, configuring, and troubleshooting Broadband and IPTV Access Network issues.",
        ],
    },
    {
        role: "Intern – Telecommunication Projects",
        company: "CAST, COMSATS University",
        period: "July 2022 – August 2022",
        type: "INT",
        bullets: [
            "Designed prototypes for ongoing telecom projects; collaborated with engineers on project delivery.",
        ],
    },
    {
        role: "Intern – Operations",
        company: "Sui Northern Gas Pipelines Limited",
        period: "July 2021 – August 2021",
        type: "INT",
        bullets: [
            "Assisted in scheduling and executing daily operational plans; maintained daily progress reports.",
        ],
    },
];

// ─── Theme ────────────────────────────────────────────────────────────────────

const C = {
    bg: "#080c10",
    surface: "#0d1117",
    border: "#1a2030",
    accent: "#38bdf8",
    accentDim: "#38bdf815",
    accentMid: "#38bdf855",
    text: "#e2e8f0",
    muted: "#4a5568",
    dim: "#1e2a3a",
    green: "#00ff88",
    yellow: "#fbbf24",
    red: "#f43f5e",
    blue: "#38bdf8",
};

// ─── Micro-components ─────────────────────────────────────────────────────────

const GlitchText: FC<GlitchTextProps> = ({ text, style }) => {
    const [g, setG] = useState(false);
    useEffect(() => {
        const t = setInterval(() => {
            setG(true);
            setTimeout(() => setG(false), 100);
        }, 4500 + Math.random() * 2000);
        return () => clearInterval(t);
    }, []);
    return (
        <span style={{ position: "relative", display: "inline-block", ...style }}>
            {text}
            {g && <>
                <span style={{ position: "absolute", top: 0, left: "2px", color: "#f43f5e", clipPath: "polygon(0 25%,100% 25%,100% 45%,0 45%)", opacity: 0.85, pointerEvents: "none" }}>{text}</span>
                <span style={{ position: "absolute", top: 0, left: "-2px", color: "#38bdf8", clipPath: "polygon(0 55%,100% 55%,100% 75%,0 75%)", opacity: 0.85, pointerEvents: "none" }}>{text}</span>
            </>}
        </span>
    );
};

const TypeWriter: FC<TypeWriterProps> = ({ text, speed = 45, onDone }) => {
    const [disp, setDisp] = useState("");
    const [done, setDone] = useState(false);
    useEffect(() => {
        let i = 0;
        const iv = setInterval(() => {
            if (i < text.length) { setDisp(text.slice(0, ++i)); }
            else { clearInterval(iv); setDone(true); onDone?.(); }
        }, speed);
        return () => clearInterval(iv);
    }, [text]);
    return <span>{disp}{!done && <span style={{ color: C.accent, animation: "blink 1s step-end infinite" }}>▌</span>}</span>;
};

const NavDot: FC<NavDotProps> = ({ active }) => (
    <div style={{ width: active ? 22 : 7, height: 7, borderRadius: 4, background: active ? C.accent : C.dim, transition: "all 0.3s" }} />
);

const Tag: FC<TagProps> = ({ text, color }) => (
    <span style={{
        padding: "3px 10px", borderRadius: 3, fontSize: 11,
        fontFamily: "'JetBrains Mono', monospace",
        background: `${color}18`, color, border: `1px solid ${color}40`,
        letterSpacing: "0.04em",
    }}>{text}</span>
);

// ─── Terminal ─────────────────────────────────────────────────────────────────

const Terminal: FC = () => {
    const [step, setStep] = useState(0);
    const lines: { prompt: string; text: string }[] = [
        { prompt: "$ ", text: "whoami" },
        { prompt: "", text: "Rohaid Ahmed Mirza — Computer Engineer" },
        { prompt: "$ ", text: "cat location.txt" },
        { prompt: "", text: "Rawalpindi, Pakistan" },
        { prompt: "$ ", text: "echo $STACK" },
        { prompt: "", text: "Python · C/C++ · Next.js · React · Django · PostgreSQL" },
        { prompt: "$ ", text: "echo $STATUS" },
        { prompt: "", text: "Open to new opportunities ✓" },
    ];
    return (
        <div style={{
            background: "#060a0e", border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "18px 22px",
            fontFamily: "'JetBrains Mono','Fira Code',monospace",
            fontSize: 12.5, lineHeight: 1.9, minHeight: 170,
        }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                    <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ marginLeft: 8, color: C.muted, fontSize: 10.5 }}>rohaid@portfolio ~ zsh</span>
            </div>
            {lines.slice(0, step + 1).map((line, i) => (
                <div key={i}>
                    {line.prompt && <span style={{ color: C.accent }}>{line.prompt}</span>}
                    {i === step
                        ? <TypeWriter text={line.text} speed={line.prompt ? 55 : 18} onDone={() => setTimeout(() => setStep(s => Math.min(s + 1, lines.length - 1)), 350)} />
                        : <span style={{ color: line.prompt ? C.text : C.muted }}>{line.text}</span>
                    }
                </div>
            ))}
        </div>
    );
};

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const [hov, setHov] = useState(false);
    const inner = (
        <div
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                border: `1px solid ${hov ? project.color + "55" : C.border}`,
                borderRadius: 8, padding: "24px 26px",
                background: hov ? `${project.color}07` : C.surface,
                transition: "all 0.3s ease", cursor: project.link ? "pointer" : "default",
                transform: hov ? "translateY(-4px)" : "none",
                boxShadow: hov ? `0 20px 48px ${project.color}20` : "none",
                position: "relative", overflow: "hidden", height: "100%",
            }}
        >
            <div style={{ position: "absolute", top: 16, right: 18, display: "flex", gap: 7, alignItems: "center" }}>
                {project.featured && (
                    <span style={{ fontSize: 8.5, padding: "2px 7px", borderRadius: 10, background: `${project.color}20`, color: project.color, fontFamily: "monospace", letterSpacing: "0.08em" }}>
                        FEATURED
                    </span>
                )}
                {project.status && (
                    <span style={{ fontSize: 8.5, padding: "2px 7px", borderRadius: 10, background: `${C.green}20`, color: C.green, fontFamily: "monospace", letterSpacing: "0.08em" }}>
                        {project.status.toUpperCase()}
                    </span>
                )}
                <span style={{ fontSize: 10, color: C.muted, fontFamily: "monospace" }}>{project.year}</span>
            </div>
            <div style={{ fontSize: 9.5, fontFamily: "monospace", color: project.color, letterSpacing: "0.18em", marginBottom: 9 }}>
                PROJECT_{project.id}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: C.text, letterSpacing: "-0.02em" }}>
                    {project.name}
                </div>
                {project.link && hov && <span style={{ fontSize: 13, color: project.color }}>↗</span>}
            </div>
            <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>{project.desc}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {project.stack.map(s => <Tag key={s} text={s} color={project.color} />)}
            </div>
            {hov && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${project.color},transparent)` }} />}
        </div>
    );
    return project.link
        ? <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>{inner}</a>
        : inner;
};

// ─── Experience Card ──────────────────────────────────────────────────────────

const typeColor: Record<string, string> = { FT: C.green, INT: C.yellow, CONTRACT: C.blue };

const ExperienceCard: FC<ExperienceCardProps> = ({ job, index }) => {
    const [open, setOpen] = useState(index === 0);
    const [hov, setHov] = useState(false);
    return (
        <div style={{ borderBottom: `1px solid ${C.border}` }}>
            <div
                onClick={() => setOpen(o => !o)}
                onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "20px 0", cursor: "pointer",
                    paddingLeft: hov ? 10 : 0, transition: "padding 0.2s",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 10, fontFamily: "monospace", color: C.muted, width: 24 }}>0{index + 1}</span>
                    <div>
                        <div style={{ fontSize: 15, color: hov ? C.accent : C.text, fontWeight: 600, transition: "color 0.2s" }}>{job.role}</div>
                        <div style={{ fontSize: 12.5, color: C.muted, marginTop: 2 }}>{job.company}</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 11, color: C.muted, fontFamily: "monospace" }}>{job.period}</span>
                    <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 2, background: `${typeColor[job.type]}22`, color: typeColor[job.type], fontFamily: "monospace", letterSpacing: "0.1em" }}>
                        {job.type}
                    </span>
                    <span style={{ color: C.muted, fontSize: 14, transition: "transform 0.25s", display: "inline-block", transform: open ? "rotate(90deg)" : "none" }}>›</span>
                </div>
            </div>
            {open && (
                <ul style={{ paddingLeft: 38, paddingBottom: 20, margin: 0 }}>
                    {job.bullets.map((b, i) => (
                        <li key={i} style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, paddingBottom: 4, listStyle: "none", position: "relative" }}>
                            <span style={{ position: "absolute", left: -14, color: C.accent, fontSize: 10 }}>▸</span>
                            {b}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// ─── Contact Link ─────────────────────────────────────────────────────────────

const ContactLink: FC<ContactLinkProps> = ({ label, value, href }) => {
    const [hov, setHov] = useState(false);
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div
                onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "15px 20px", border: `1px solid ${hov ? C.accentMid : C.border}`,
                    borderRadius: 6, cursor: "pointer",
                    background: hov ? C.accentDim : "transparent",
                    transition: "all 0.2s ease",
                }}
            >
                <span style={{ fontSize: 10, color: C.muted, fontFamily: "monospace", letterSpacing: "0.12em" }}>{label}</span>
                <span style={{ fontSize: 13.5, color: hov ? C.accent : C.text, fontFamily: "monospace" }}>
                    {value} {hov ? "↗" : ""}
                </span>
            </div>
        </a>
    );
};

// ─── Main Portfolio ───────────────────────────────────────────────────────────

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [scrollY, setScrollY] = useState<number>(0);
    const sections = ["home", "projects", "skills", "experience", "contact"];
    const refs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const onScroll = () => {
            setScrollY(window.scrollY);
            const cur = sections.find(id => {
                const el = refs.current[id];
                if (!el) return false;
                const r = el.getBoundingClientRect();
                return r.top <= 130 && r.bottom > 130;
            });
            if (cur) setActiveSection(cur);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => refs.current[id]?.scrollIntoView({ behavior: "smooth" });

    return (
        <div style={{ background: C.bg, color: C.text, minHeight: "100vh", fontFamily: "'Syne','DM Sans',sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#080c10}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#080c10}
        ::-webkit-scrollbar-thumb{background:#1e2a3a;border-radius:2px}
      `}</style>

            {/* CRT noise overlay */}
            <div style={{
                position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, opacity: 0.025,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }} />

            {/* Ambient glow */}
            <div style={{ position: "fixed", top: "20%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.accent}08 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "fixed", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, #f43f5e08 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />

            {/* ── NAV ── */}
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                background: scrollY > 20 ? "rgba(8,12,16,0.93)" : "transparent",
                backdropFilter: scrollY > 20 ? "blur(14px)" : "none",
                borderBottom: scrollY > 20 ? `1px solid ${C.border}` : "none",
                transition: "all 0.35s ease", padding: "0 52px",
            }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13.5, color: C.accent, letterSpacing: "0.08em", fontWeight: 500 }}>
                        RAM<span style={{ color: C.muted }}>_dev</span>
                    </div>
                    <div style={{ display: "flex", gap: 30 }}>
                        {sections.filter(s => s !== "home").map(s => (
                            <button key={s} onClick={() => scrollTo(s)} style={{
                                background: "none", border: "none", cursor: "pointer", fontSize: 13,
                                color: activeSection === s ? C.accent : C.muted,
                                fontFamily: "'Syne',sans-serif", letterSpacing: "0.06em",
                                textTransform: "capitalize", transition: "color 0.2s", fontWeight: 500,
                            }}>{s}</button>
                        ))}
                    </div>
                    <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                        {sections.map(s => <NavDot key={s} active={activeSection === s} />)}
                    </div>
                </div>
            </nav>

            <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 52px", position: "relative", zIndex: 1 }}>

                {/* ── HERO ── */}
                <section ref={el => { refs.current["home"] = el; }} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80 }}>
                    <div style={{ animation: "fadeUp 0.75s ease both" }}>

                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", border: `1px solid ${C.accentMid}`, borderRadius: 20, marginBottom: 36, background: C.accentDim }}>
                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.accent, animation: "pulse 2s ease-in-out infinite" }} />
                            <span style={{ fontSize: 11, color: C.accent, fontFamily: "monospace", letterSpacing: "0.12em" }}>AVAILABLE FOR OPPORTUNITIES</span>
                        </div>

                        <h1 style={{ fontSize: "clamp(48px,7.5vw,90px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 28 }}>
                            <GlitchText text="Rohaid" />{" "}
                            <span style={{ color: C.accent }}>Ahmed</span>
                            <br />
                            <span style={{ color: C.muted, fontWeight: 400 }}>Mirza.</span>
                        </h1>

                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                            <div style={{ height: 1, width: 40, background: `linear-gradient(90deg, ${C.accent}, transparent)` }} />
                            <span style={{ fontSize: 14, color: C.muted, fontFamily: "monospace", letterSpacing: "0.12em" }}>COMPUTER ENGINEER · FULL STACK DEVELOPER</span>
                        </div>

                        <p style={{ fontSize: 17, color: C.muted, maxWidth: 540, lineHeight: 1.75, marginBottom: 48, fontWeight: 400 }}>
                            2+ years building scalable web applications and firmware solutions. Proficient in Python, C/C++, Next.js, React, and Django — from pixel-perfect frontends to distributed backends and embedded systems.
                        </p>

                        <div style={{ display: "flex", gap: 14, marginBottom: 64, flexWrap: "wrap" }}>
                            <button onClick={() => scrollTo("projects")} style={{
                                padding: "13px 30px", background: C.accent, color: "#000",
                                border: "none", borderRadius: 4, fontSize: 13.5, fontWeight: 700,
                                cursor: "pointer", letterSpacing: "0.06em", fontFamily: "'Syne',sans-serif",
                                transition: "all 0.2s",
                            }}
                                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                                onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                            >View Projects</button>
                            <button onClick={() => scrollTo("contact")} style={{
                                padding: "13px 30px", background: "transparent", color: C.text,
                                border: `1px solid ${C.dim}`, borderRadius: 4, fontSize: 13.5,
                                cursor: "pointer", letterSpacing: "0.06em", fontFamily: "'Syne',sans-serif",
                                transition: "all 0.2s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = C.dim; e.currentTarget.style.color = C.text; }}
                            >Get In Touch</button>
                        </div>

                        <Terminal />
                    </div>

                    <div style={{ display: "flex", gap: 52, marginTop: 60, paddingTop: 44, borderTop: `1px solid ${C.border}`, flexWrap: "wrap" }}>
                        {[["2+", "Years exp."], ["8+", "Projects shipped"], ["2", "Companies"], ["BS", "Computer Eng."]].map(([val, label]) => (
                            <div key={label}>
                                <div style={{ fontSize: 26, fontWeight: 800, color: C.accent, letterSpacing: "-0.03em" }}>{val}</div>
                                <div style={{ fontSize: 11, color: C.muted, marginTop: 3, fontFamily: "monospace", letterSpacing: "0.06em" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── PROJECTS ── */}
                <section ref={el => { refs.current["projects"] = el; }} style={{ paddingTop: 120, paddingBottom: 80 }}>
                    <SectionHeader number="02" title="Selected Work" sub="Things I've built and shipped — click any card to view live." />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
                    </div>
                </section>

                {/* ── SKILLS ── */}
                <section ref={el => { refs.current["skills"] = el; }} style={{ paddingTop: 120, paddingBottom: 80 }}>
                    <SectionHeader number="03" title="Tech Stack" sub="Tools and technologies I work with daily." />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
                        {Object.entries(skills).map(([cat, items]) => (
                            <div key={cat} style={{ border: `1px solid ${C.border}`, borderRadius: 8, padding: "22px 24px", background: C.surface }}>
                                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: C.accent, marginBottom: 14, fontFamily: "monospace" }}>{cat.toUpperCase()}</div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {items.map(sk => (
                                        <div key={sk} style={{ padding: "4px 12px", border: `1px solid ${C.dim}`, borderRadius: 3, fontSize: 12.5, color: C.text, fontFamily: "monospace" }}>{sk}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── EXPERIENCE ── */}
                <section ref={el => { refs.current["experience"] = el; }} style={{ paddingTop: 120, paddingBottom: 80 }}>
                    <SectionHeader number="04" title="Experience" sub="Where I've worked and what I've built." />
                    <div>
                        {experience.map((job, i) => <ExperienceCard key={i} job={job} index={i} />)}
                    </div>

                    {/* Education block */}
                    <div style={{ marginTop: 52, border: `1px solid ${C.border}`, borderRadius: 8, padding: "28px 32px", background: C.surface }}>
                        <div style={{ fontSize: 10, letterSpacing: "0.18em", color: C.yellow, marginBottom: 12, fontFamily: "monospace" }}>EDUCATION</div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                            <div>
                                <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>BS Computer Engineering</div>
                                <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>COMSATS University Islamabad</div>
                            </div>
                            <span style={{ fontSize: 11, color: C.muted, fontFamily: "monospace" }}>2019 – 2023</span>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
                            <span style={{ color: C.text, fontWeight: 600 }}>Final Year Project: </span>
                            Smartphone-Based Detection of Retinal Abnormalities — led a team developing a mobile/web application integrating AI algorithms for early detection of diabetic retinopathy.
                        </div>
                        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 7 }}>
                            {["AI", "Neural Networks", "Embedded Systems", "DSP", "Networking", "Algorithms", "Control Systems"].map(c => (
                                <Tag key={c} text={c} color={C.yellow} />
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div style={{ marginTop: 20, border: `1px solid ${C.border}`, borderRadius: 8, padding: "22px 28px", background: C.surface }}>
                        <div style={{ fontSize: 10, letterSpacing: "0.18em", color: C.blue, marginBottom: 16, fontFamily: "monospace" }}>CERTIFICATIONS</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                ["Next.js App Router Fundamentals", "Nextjs.org"],
                                ["Next.js Pages Router Fundamentals", "Nextjs.org"],
                                ["Crash Course on Python", "Coursera (Google)"],
                            ].map(([name, issuer]) => (
                                <div key={name} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.text }}>
                                    <span>{name}</span>
                                    <span style={{ color: C.muted, fontFamily: "monospace", fontSize: 11 }}>{issuer}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CONTACT ── */}
                <section ref={el => { refs.current["contact"] = el; }} style={{ paddingTop: 120, paddingBottom: 100 }}>
                    <SectionHeader number="05" title="Let's Talk" sub="Open to roles, freelance, and interesting collaborations." />
                    <div style={{ maxWidth: 560, display: "flex", flexDirection: "column", gap: 11 }}>
                        <ContactLink label="EMAIL" value="rohaidahmed123@gmail.com" href="mailto:rohaidahmed123@gmail.com" />
                        <ContactLink label="PHONE" value="+92 319 754 7207" href="tel:+923197547207" />
                        <ContactLink label="LINKEDIN" value="linkedin.com/in/rohaid-ahmed-mirza" href="https://linkedin.com/in/rohaid-ahmed-mirza-11a35721a" />
                        <ContactLink label="GITHUB" value="github.com/RohaidAhmed" href="https://github.com/RohaidAhmed" />
                    </div>

                    <div style={{ marginTop: 72, paddingTop: 36, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "monospace", fontSize: 11.5, color: C.muted }}>© 2025 Rohaid Ahmed Mirza — Built with Next.js + TypeScript</span>
                        <span style={{ fontFamily: "monospace", fontSize: 11, color: C.dim }}>Rawalpindi, PK</span>
                    </div>
                </section>

            </div>
        </div>
    );
}

// ─── Section Header ───────────────────────────────────────────────────────────

interface SectionHeaderProps { number: string; title: string; sub: string; }
const SectionHeader: FC<SectionHeaderProps> = ({ number, title, sub }) => (
    <div style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: C.accent, letterSpacing: "0.18em" }}>{number}.</span>
            <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em" }}>{title}</h2>
        </div>
        <p style={{ color: C.muted, fontSize: 14 }}>{sub}</p>
    </div>
);