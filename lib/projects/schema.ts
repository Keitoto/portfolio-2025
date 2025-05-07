import { z } from 'zod'

export const ProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  demoLink: z.string().url().optional(),
  githubLink: z.string().url().optional(),
  articleLink: z.string().optional(),
  thumbNail: z.string().url(),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((dateString) => {
    const date = new Date(dateString)
    return !Number.isNaN(date.getTime())
  }),
})
