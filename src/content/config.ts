import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Residential', 'Commercial', 'Industrial', 'Community', 'Agricultural', 'Educational']),
    capacity: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    rating: z.number().min(1).max(5),
    content: z.string(),
    avatar: z.string().default('👤'),
    date: z.date(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.enum(['SolarPanel', 'Battery', 'Installation', 'Maintenance', 'Consulting', 'LeafEnergy']),
    description: z.string(),
    benefits: z.string(),
    features: z.array(z.string()),
    order: z.number().default(1),
  }),
});

export const collections = {
  blog,
  projects,
  testimonials,
  services,
};
