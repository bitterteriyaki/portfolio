// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    'nuxt-icon',
    '@nuxt/content',
  ],
  eslint: {
    lintOnStart: false,
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: { 'DM+Sans': [400, 500, 600, 700] },
  },
})
