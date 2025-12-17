import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { fetchGitHubRepos } from "./github";

// Default GitHub username for portfolio - can be configured
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "octocat";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get all projects from GitHub
  app.get("/api/projects", async (req, res) => {
    try {
      const username = (req.query.username as string) || GITHUB_USERNAME;
      const projects = await fetchGitHubRepos(username);
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  // Get a single project by ID
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const username = (req.query.username as string) || GITHUB_USERNAME;
      const projects = await fetchGitHubRepos(username);
      const project = projects.find(p => p.id === id);
      
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  return httpServer;
}
