<script setup lang="ts">
const title = 'kyomi\'s portfolio and blog'
const description = ''

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s | kyomi',
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <AppHeader />
    <AppMain />
    <USeparator />
    <AppFooter />
  </UApp>
</template>
