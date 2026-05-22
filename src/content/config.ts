import { z, defineCollection } from 'astro:content';

const frustration = z.tuple([z.string(), z.string()]);
const useCase = z.tuple([z.string(), z.string()]);
const bullet = z.tuple([z.string(), z.string()]);

const section = z.object({
  group: z.string(),
  number: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()).optional(),
  bullets: z.array(bullet).optional(),
  imageLabel: z.string().optional(),
  processImages: z.array(z.string()).optional(),
  processNote: z.string().optional(),
});

const persona = z.object({
  name: z.string(),
  blurb: z.string(),
  frustrations: z.array(frustration),
});

const problem = z.object({
  body: z.string(),
  emphasis: z.string(),
  after: z.string().optional(),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    case: z.string(),
    label: z.string(),
    industry: z.enum(['GIS', 'Education', 'Tourism', 'Design Systems']),
    cardTitle: z.string(),
    cardBody: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    platforms: z.string(),
    timeline: z.string(),
    fullCase: z.boolean(),
    nextCaseSlug: z.string().optional(),
    nextCaseLabel: z.string().optional(),
    nextCaseTitle: z.string().optional(),
    overview: z.array(z.string()).optional(),
    problem: problem.optional(),
    personas: z.array(persona).optional(),
    useCases: z.array(useCase).optional(),
    sections: z.array(section).optional(),
  }),
});

export const collections = { work };
