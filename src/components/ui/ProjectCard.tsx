"use client";

import { FC, useState } from "react";
import { ProjectCardProps } from "@/types";
import { C } from "@/theme/colors";
import Tag from "./Tag";

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [hov, setHov] = useState(false);

  const inner = (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? project.color + "55" : C.border}`,
        borderRadius: 8,
        padding: "24px 26px",
        background: hov ? `${project.color}07` : C.surface,
        transition: "all 0.3s ease",
        cursor: project.link ? "pointer" : "default",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 20px 48px ${project.color}20` : "none",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Top-right badges */}
      <div style={{ position: "absolute", top: 16, right: 18, display: "flex", gap: 7, alignItems: "center" }}>
        {project.featured && (
          <span
            style={{
              fontSize: 8.5, padding: "2px 7px", borderRadius: 10,
              background: `${project.color}20`, color: project.color,
              fontFamily: "monospace", letterSpacing: "0.08em",
            }}
          >
            FEATURED
          </span>
        )}
        {project.status && (
          <span
            style={{
              fontSize: 8.5, padding: "2px 7px", borderRadius: 10,
              background: `${C.green}20`, color: C.green,
              fontFamily: "monospace", letterSpacing: "0.08em",
            }}
          >
            {project.status.toUpperCase()}
          </span>
        )}
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "monospace" }}>{project.year}</span>
      </div>

      {/* Project ID */}
      <div
        style={{
          fontSize: 9.5, fontFamily: "monospace", color: project.color,
          letterSpacing: "0.18em", marginBottom: 9,
        }}
      >
        PROJECT_{project.id}
      </div>

      {/* Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
        <div style={{ fontSize: 17, fontWeight: 700, color: C.text, letterSpacing: "-0.02em" }}>
          {project.name}
        </div>
        {project.link && hov && (
          <span style={{ fontSize: 13, color: project.color }}>↗</span>
        )}
      </div>

      {/* Description */}
      <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>
        {project.desc}
      </div>

      {/* Stack tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {project.stack.map((s) => (
          <Tag key={s} text={s} color={project.color} />
        ))}
      </div>

      {/* Hover bottom bar */}
      {hov && (
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg,transparent,${project.color},transparent)`,
          }}
        />
      )}
    </div>
  );

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
    >
      {inner}
    </a>
  ) : (
    inner
  );
};

export default ProjectCard;
