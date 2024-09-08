// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [
    { path: '@/components', pathPrefix: false },
    { path: '@/components/content', pathPrefix: true },
  ],
  app: {
    head: { htmlAttrs: { lang: 'en' } },
    pageTransition: { name: 'page', mode: 'out-in' },
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
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  image: {
    domains: ['github.com'],
    alias: { github: 'https://github.com' },
  },
})
