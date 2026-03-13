<script setup lang="ts">
import type { NuxtError } from '#app'

interface ErrorPage {
  error: Partial<NuxtError>
}

defineProps<ErrorPage>()
</script>

<template>
  <UApp>
    <UError :error="error" :clear="{ color: 'neutral' }" />
  </UApp>
</template>
