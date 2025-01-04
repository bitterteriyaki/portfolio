// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [
    { path: '@/components', pathPrefix: false },
    { path: '@/components/content', pathPrefix: true },
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
        },
      ],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    '@vueuse/nuxt',
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'system',
    classSuffix: '',
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM Sans': [400, 500, 700],
    },
  },
  image: {
    domains: ['github.com'],
    alias: { github: 'https://github.com' },
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: {
        'rehype-katex': { output: 'html' },
      },
    },
  },
})
