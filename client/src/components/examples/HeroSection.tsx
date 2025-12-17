import HeroSection from "../HeroSection";
import { Project } from "../ProjectCard";

// todo: remove mock functionality
const mockProjects: Project[] = [
  {
    id: "1",
    title: "Neural Dashboard",
    description: "Sistema de monitoreo en tiempo real con visualizaciones avanzadas",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "D3.js"],
  },
  {
    id: "2",
    title: "Crypto Tracker",
    description: "Aplicación de seguimiento de criptomonedas con alertas personalizadas",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["Next.js", "WebSocket", "TailwindCSS"],
  },
];

export default function HeroSectionExample() {
  return (
    <HeroSection
      featuredProjects={mockProjects}
      onProjectClick={(p) => console.log("Featured project clicked:", p.title)}
      onViewAllClick={() => console.log("View all clicked")}
    />
  );
}
