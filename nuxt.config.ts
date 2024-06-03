// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [{ path: '@/components', pathPrefix: false }],
  modules: [
    '@nuxt/image',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    'nuxt-icon',
  ],
  routeRules: {
    '/': { prerender: true },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },
  // Modules configuration
  eslint: { lintOnStart: false },
  device: { refreshOnResize: true },
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
    formats: ['webp', 'png'],
    domains: ['github.com'],
    alias: { github: 'https://github.com' },
  },
})
