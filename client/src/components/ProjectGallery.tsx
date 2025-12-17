import ProjectCard, { Project } from "./ProjectCard";

interface ProjectGalleryProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export default function ProjectGallery({ projects, onProjectClick }: ProjectGalleryProps) {
  return (
    <section id="all-projects" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono font-bold text-2xl md:text-4xl uppercase tracking-wider text-center mb-4">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-magenta"
            style={{
              textShadow: "0 0 30px hsl(320 100% 50% / 0.5)",
            }}
          >
            TODOS LOS PROYECTOS
          </span>
        </h2>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-neon-magenta to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
