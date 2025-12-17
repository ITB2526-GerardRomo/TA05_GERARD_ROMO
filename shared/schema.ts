import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// GitHub Project schema for portfolio
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  technologies: z.array(z.string()).optional(),
  longDescription: z.string().optional(),
  codeSnippet: z.string().optional(),
  codeLanguage: z.string().optional(),
  codeFilename: z.string().optional(),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  stars: z.number().optional(),
  forks: z.number().optional(),
  updatedAt: z.string().optional(),
});

export type Project = z.infer<typeof projectSchema>;
