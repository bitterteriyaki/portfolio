<template>
  <NuxtLayout>
    <NuxtPage />
    <SpeedInsights />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

useHead({
  titleTemplate: '%s | kyomi',
})
</script>
