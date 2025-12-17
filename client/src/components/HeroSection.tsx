import { useState } from "react";
import CyberpunkButton from "./CyberpunkButton";
import { Project } from "./ProjectCard";

interface HeroSectionProps {
  featuredProjects: Project[];
  onProjectClick?: (project: Project) => void;
  onViewAllClick?: () => void;
}

export default function HeroSection({
  featuredProjects,
  onProjectClick,
  onViewAllClick,
}: HeroSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="inicio" className="pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-mono font-bold text-3xl md:text-5xl uppercase tracking-wider text-center mb-4">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan"
            style={{
              textShadow: "0 0 30px hsl(180 100% 50% / 0.5)",
            }}
          >
            PROYECTOS DESTACADOS
          </span>
        </h1>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent mb-12" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <a
              key={project.id}
              href="#all-projects"
              onClick={(e) => {
                e.preventDefault();
                onProjectClick?.(project);
              }}
              className="group relative block aspect-video overflow-hidden rounded-md cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`hero-project-${project.id}`}
              style={{
                boxShadow:
                  hoveredIndex === index
                    ? "0 0 20px hsl(180 100% 50% / 0.4), 0 0 40px hsl(180 100% 50% / 0.2)"
                    : "0 0 10px hsl(180 100% 50% / 0.1)",
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500"
                style={{
                  filter:
                    hoveredIndex === index
                      ? "brightness(0.9) saturate(1.2)"
                      : "brightness(0.5) saturate(0.8)",
                  transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-60" : "opacity-80"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.5) 50%, rgba(10,10,15,0.9) 100%)",
                }}
              />
              <div
                className={`absolute inset-0 border-2 rounded-md transition-all duration-300 ${
                  hoveredIndex === index
                    ? "border-neon-cyan opacity-100"
                    : "border-neon-cyan/30 opacity-50"
                }`}
              />
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,243,255,0.03) 2px, rgba(0,243,255,0.03) 4px)",
                  }}
                />
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h2
                  className="font-mono font-bold text-xl md:text-2xl uppercase tracking-wider mb-2 transition-all duration-300"
                  style={{
                    color:
                      hoveredIndex === index
                        ? "hsl(180 100% 50%)"
                        : "hsl(180 20% 90%)",
                    textShadow:
                      hoveredIndex === index
                        ? "0 0 15px hsl(180 100% 50%)"
                        : "none",
                  }}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-xs">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desarrollador web especializado en crear{" "}
            <span className="text-neon-cyan">interfaces inmersivas</span> y{" "}
            <span className="text-neon-magenta">aplicaciones modernas</span>.
            Trabajo con React, TypeScript, Node.js y tecnologías de vanguardia
            para construir experiencias digitales que destacan.
          </p>
        </div>

        <div className="text-center">
          <CyberpunkButton
            href="#all-projects"
            onClick={() => {
              onViewAllClick?.();
            }}
            data-testid="button-view-all-projects"
          >
            VER TODOS LOS PROYECTOS
          </CyberpunkButton>
        </div>
      </div>
    </section>
  );
}
