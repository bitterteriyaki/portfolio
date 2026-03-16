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
  ogImage: 'https://i.imgur.com/0yIQu2V.png',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: 'https://i.imgur.com/0yIQu2V.png',
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
  <SpeedInsights />
</template>
