// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  components: [
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components', pathPrefix: true },
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  routeRules: { '/': { prerender: true } },
  compatibilityDate: '2025-01-15',
  image: { domains: ['github.com'], alias: { github: 'https://github.com' } },
})
