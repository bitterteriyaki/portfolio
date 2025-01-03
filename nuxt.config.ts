// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [
    { path: '@/components', pathPrefix: false },
  ],
  app: {
    head: { htmlAttrs: { lang: 'en' } },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
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
})