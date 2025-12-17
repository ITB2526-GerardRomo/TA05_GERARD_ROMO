import { useState } from "react";
import { Card } from "@/components/ui/card";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`
        relative overflow-visible cursor-pointer
        bg-card border-border/50
        transition-all duration-300 ease-out
        ${isHovered ? "border-neon-cyan/70" : ""}
      `}
      style={{
        boxShadow: isHovered
          ? "0 0 15px hsl(180 100% 50% / 0.3), 0 0 30px hsl(180 100% 50% / 0.1)"
          : "none",
        transform: isHovered ? "translateY(-4px) scale(1.02)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick?.(project)}
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-md">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-300"
          style={{
            filter: isHovered ? "brightness(1.1)" : "brightness(0.7)",
          }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-70"
          }`}
        />
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,243,255,0.03) 2px, rgba(0,243,255,0.03) 4px)",
              animation: "scanline 8s linear infinite",
            }}
          />
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3
          className="font-mono font-bold text-lg uppercase tracking-wide transition-colors duration-300"
          style={{
            color: isHovered ? "hsl(180 100% 50%)" : "hsl(180 20% 90%)",
            textShadow: isHovered ? "0 0 10px hsl(180 100% 50%)" : "none",
          }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-1 bg-secondary/50 text-neon-cyan/80 border border-neon-cyan/20 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
