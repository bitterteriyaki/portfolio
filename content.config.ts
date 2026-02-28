import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string(),
})

const createAuthorSchema = () => z.object({
  name: z.string(),
  description: z.string().optional(),
  avatar: createImageSchema().optional(),
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.date(),
        minRead: z.number(),
        image: z.string().nonempty().editor({ input: 'media' }),
        author: createAuthorSchema(),

        // tags: z.array(z.string()),
      }),
    }),
  },
})
