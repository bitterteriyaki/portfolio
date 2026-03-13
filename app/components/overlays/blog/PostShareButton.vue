<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const toast = useToast()
const { copy } = useClipboard()

const copyUrl = () => {
  toast.add({ title: 'Copied to clipboard.' })
  const url = `${window.location.origin}${route.fullPath}`

  return copy(url)
}
</script>

<template>
  <UTooltip text="Share this post">
    <UButton
      icon="i-heroicons-arrow-up-tray"
      variant="ghost"
      color="neutral"
      @click="copyUrl"
    />
  </UTooltip>
</template>
