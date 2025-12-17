import type { Project } from "@shared/schema";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

// Curated images for different project types/languages
const projectImages: Record<string, string> = {
  typescript: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  javascript: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
  python: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop",
  react: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
  nodejs: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
  api: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  web: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
  default: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=800&h=500&fit=crop",
};

function getProjectImage(repo: GitHubRepo): string {
  const language = repo.language?.toLowerCase() || "";
  const topics = repo.topics.map(t => t.toLowerCase());
  
  if (topics.includes("react") || topics.includes("reactjs")) return projectImages.react;
  if (topics.includes("ai") || topics.includes("machine-learning")) return projectImages.ai;
  if (language === "typescript") return projectImages.typescript;
  if (language === "javascript") return projectImages.javascript;
  if (language === "python") return projectImages.python;
  if (topics.includes("api") || topics.includes("backend")) return projectImages.api;
  if (topics.includes("nodejs") || topics.includes("node")) return projectImages.nodejs;
  
  return projectImages.default;
}

function getTechnologies(repo: GitHubRepo): string[] {
  const techs: string[] = [];
  
  if (repo.language) {
    techs.push(repo.language);
  }
  
  // Add relevant topics as technologies (limit to 5)
  const relevantTopics = repo.topics
    .filter(topic => !["hacktoberfest", "good-first-issue", "help-wanted"].includes(topic.toLowerCase()))
    .slice(0, 4);
  
  techs.push(...relevantTopics.map(t => t.charAt(0).toUpperCase() + t.slice(1)));
  
  return Array.from(new Set(techs)).slice(0, 5);
}

export async function fetchGitHubRepos(username: string): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "CyberpunkPortfolio/1.0",
        },
      }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and repos without descriptions, sort by stars
    const filteredRepos = repos
      .filter(repo => repo.description && repo.description.length > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return filteredRepos.map((repo): Project => ({
      id: repo.id.toString(),
      title: formatRepoName(repo.name),
      description: repo.description || "Sin descripción disponible",
      longDescription: repo.description || "Sin descripción disponible",
      imageUrl: getProjectImage(repo),
      technologies: getTechnologies(repo),
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || undefined,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

function formatRepoName(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
