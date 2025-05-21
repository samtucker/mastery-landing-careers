import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple API to get all skills
  app.get('/api/skills', (_req, res) => {
    // This would typically come from a database
    const skills = [
      {
        title: "Full-Stack Web Development",
        description: "Master modern frameworks and build responsive, scalable web applications",
        duration: 20,
        level: "Advanced",
        color: "purple"
      },
      {
        title: "Strategic Consulting Skills",
        description: "Learn how to analyze business challenges and present compelling solutions",
        duration: 15,
        level: "Intermediate",
        color: "blue"
      },
      // Additional skills would be defined here
    ];
    
    res.json(skills);
  });

  const httpServer = createServer(app);

  return httpServer;
}
