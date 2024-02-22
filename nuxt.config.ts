// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [{ path: '~/components', pathPrefix: false }],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/test-utils/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    'nuxt-icon',
  ],
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
      'Inter': [400, 500, 600, 700],
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  image: {
    format: ['webp', 'png'],
    domains: ['github.com'],
    alias: { github: 'https://github.com' },
  },
  content: {
    navigation: {
      fields: ['coverImage', 'publishedAt'],
    },
  },
})
