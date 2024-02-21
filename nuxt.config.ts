// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.sass'],
  components: [{ path: '~/components', pathPrefix: false }],
  modules: [
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  eslint: { lintOnStart: false },
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
})
