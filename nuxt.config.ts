// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [{ path: '@/components', pathPrefix: false }],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/google-fonts'],
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
})
