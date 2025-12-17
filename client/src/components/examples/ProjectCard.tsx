import ProjectCard, { Project } from "../ProjectCard";

// todo: remove mock functionality
const mockProject: Project = {
  id: "1",
  title: "Neural Dashboard",
  description: "Sistema de monitoreo en tiempo real con visualizaciones de datos avanzadas y alertas inteligentes.",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  technologies: ["React", "TypeScript", "D3.js"],
};

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        project={mockProject}
        onClick={(p) => console.log("Project clicked:", p.title)}
      />
    </div>
  );
}
