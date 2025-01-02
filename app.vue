<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <UNotifications />
    <SpeedInsights />
    <Analytics />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  titleTemplate: '%s | kyomi',
})
</script>
