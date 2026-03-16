<script setup lang="ts">
const title = 'kyomi\'s portfolio and blog'
const description = `
  Welcome to my personal website, where I share my thoughts on software
  engineering, algorithms, and mathematics. I'm a software engineer with a
  passion for learning and sharing knowledge. Here you'll find blog posts,
  projects, and resources that I've created over the years. Feel free to explore
  and reach out if you have any questions or just want to say hi!
`

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
  ogUrl: 'https://kyomi.dev',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: 'https://i.imgur.com/0yIQu2V.png',
  twitterCard: 'summary_large_image',
  themeColor: '#0F172B',
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
