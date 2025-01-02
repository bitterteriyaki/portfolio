<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <UNotifications />
    <SpeedInsights />
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  titleTemplate: '%s | kyomi',
})
</script>
