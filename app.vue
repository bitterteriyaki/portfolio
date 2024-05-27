<template>
  <NuxtLayout>
    <NuxtPage />
    <SpeedInsights />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const keywords = [
  'kyomi',
  'portfolio',
  'blog',
  'developer',
  'software engineer',
  'technology',
]

useHead({
  titleTemplate: '%s | kyomi',
  meta: [
    {
      name: 'author',
      content: 'kyomi',
    },
    {
      name: 'description',
      content: 'Hi, this is my personal portfolio and blog.',
    },
    {
      name: 'keywords',
      content: keywords.join(', '),
    },
    {
      name: 'generator',
      content: 'Nuxt',
    },
  ],
})
</script>
