import ProjectGallery from "../ProjectGallery";
import { Project } from "../ProjectCard";

// todo: remove mock functionality
const mockProjects: Project[] = [
  {
    id: "1",
    title: "Neural Dashboard",
    description: "Sistema de monitoreo en tiempo real con visualizaciones de datos avanzadas.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "D3.js"],
  },
  {
    id: "2",
    title: "Crypto Tracker",
    description: "Aplicación de seguimiento de criptomonedas con alertas personalizadas.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["Next.js", "WebSocket"],
  },
  {
    id: "3",
    title: "AI Chat Bot",
    description: "Chatbot inteligente con procesamiento de lenguaje natural.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "OpenAI", "FastAPI"],
  },
  {
    id: "4",
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico moderna y escalable.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
];

export default function ProjectGalleryExample() {
  return (
    <ProjectGallery
      projects={mockProjects}
      onProjectClick={(p) => console.log("Gallery project clicked:", p.title)}
    />
  );
}
