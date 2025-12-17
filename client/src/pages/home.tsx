import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";
import type { Project as ProjectType } from "@shared/schema";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const { data: projects = [], isLoading } = useQuery<ProjectType[]>({
    queryKey: ["/api/projects"],
  });

  const handleNavigate = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (selectedProject) {
        setSelectedProject(null);
      }
    }
  };

  const handleProjectClick = (project: Project) => {
    const fullProject = projects.find((p) => p.id === project.id);
    if (fullProject) {
      setSelectedProject(fullProject);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  // Convert API projects to frontend Project format
  const frontendProjects: Project[] = projects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    imageUrl: p.imageUrl,
    technologies: p.technologies,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />

      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBack} />
      ) : (
        <>
          <HeroSection
            featuredProjects={frontendProjects.slice(0, 2)}
            onProjectClick={handleProjectClick}
            onViewAllClick={() => handleNavigate("#all-projects")}
          />
          {isLoading ? (
            <section className="py-20 px-4 md:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <div className="animate-pulse">
                  <div className="h-8 bg-secondary/50 rounded w-64 mx-auto mb-8" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-card rounded-md p-4 border border-border/30">
                        <div className="aspect-video bg-secondary/30 rounded mb-4" />
                        <div className="h-6 bg-secondary/30 rounded mb-2" />
                        <div className="h-4 bg-secondary/20 rounded w-3/4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <ProjectGallery
              projects={frontendProjects}
              onProjectClick={handleProjectClick}
            />
          )}
        </>
      )}

      <Footer />
    </div>
  );
}
