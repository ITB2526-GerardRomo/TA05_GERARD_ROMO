import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import CyberpunkButton from "./CyberpunkButton";
import CodeBlock from "./CodeBlock";
import { Project } from "./ProjectCard";
import { Button } from "@/components/ui/button";

interface ProjectDetailProps {
  project: Project & {
    longDescription?: string;
    codeSnippet?: string;
    codeLanguage?: string;
    codeFilename?: string;
    githubUrl?: string;
    liveUrl?: string;
  };
  onBack?: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <section className="py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-muted-foreground gap-2"
          data-testid="button-back"
        >
          <ArrowLeft size={18} />
          <span className="font-mono uppercase text-sm tracking-wider">Volver</span>
        </Button>

        <div
          className="relative aspect-video overflow-hidden rounded-md mb-8"
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
          style={{
            boxShadow: imageHovered
              ? "0 0 30px hsl(180 100% 50% / 0.3), 0 0 60px hsl(180 100% 50% / 0.15)"
              : "0 0 15px hsl(180 100% 50% / 0.1)",
          }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              filter: imageHovered
                ? "brightness(0.9) saturate(1.1)"
                : "brightness(0.7) saturate(0.9)",
              transform: imageHovered ? "scale(1.02)" : "scale(1)",
            }}
          />
          <div
            className={`absolute inset-0 border-2 rounded-md transition-all duration-300 ${
              imageHovered ? "border-neon-cyan" : "border-neon-cyan/30"
            }`}
          />
          {imageHovered && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,243,255,0.02) 2px, rgba(0,243,255,0.02) 4px)",
              }}
            />
          )}
        </div>

        <h1
          className="font-mono font-bold text-3xl md:text-4xl uppercase tracking-wider mb-4"
          style={{
            color: "hsl(180 100% 50%)",
            textShadow: "0 0 20px hsl(180 100% 50% / 0.5)",
          }}
        >
          {project.title}
        </h1>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-sm px-3 py-1 bg-secondary/50 text-neon-magenta border border-neon-magenta/30 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {project.codeSnippet && (
          <div className="mb-12">
            <h2 className="font-mono font-bold text-xl uppercase tracking-wider mb-4 text-neon-green">
              Fragmento de Código
            </h2>
            <CodeBlock
              code={project.codeSnippet}
              language={project.codeLanguage || "javascript"}
              filename={project.codeFilename}
            />
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <CyberpunkButton
              variant="cyan"
              href={project.githubUrl}
              data-testid="button-github-repo"
            >
              <span className="flex items-center gap-2">
                <SiGithub size={18} />
                VER REPOSITORIO
              </span>
            </CyberpunkButton>
          )}
          {project.liveUrl && (
            <CyberpunkButton
              variant="magenta"
              href={project.liveUrl}
              data-testid="button-live-demo"
            >
              <span className="flex items-center gap-2">
                <ExternalLink size={18} />
                VER DEMO
              </span>
            </CyberpunkButton>
          )}
        </div>
      </div>
    </section>
  );
}
