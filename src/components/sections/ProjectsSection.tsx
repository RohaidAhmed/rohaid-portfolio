import { FC } from "react";
import { SectionProps } from "@/types";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

const ProjectsSection: FC<SectionProps> = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    style={{ paddingTop: 120, paddingBottom: 80 }}
  >
    <SectionHeader
      number="02"
      title="Selected Work"
      sub="Things I've built and shipped — click any card to view live."
    />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
