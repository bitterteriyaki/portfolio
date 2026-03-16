import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const ALLOWED_LANGUAGES = ['english', 'portuguese'] as const

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string(),
})

const createAuthorSchema = () => z.object({
  name: z.string(),
  description: z.string().optional(),
  avatar: createImageSchema().optional(),
})

const createBlogSchema = () => z.object({
  date: z.date().optional(),
  minRead: z.number().optional(),
  image: z.string().nonempty().editor({ input: 'media' }),
  author: createAuthorSchema(),
  language: z.enum(ALLOWED_LANGUAGES),
  tags: z.array(z.string()),
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: createBlogSchema(),
    }),
  },
})
