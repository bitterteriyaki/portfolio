<template>
  <UTooltip text="Share this post">
    <UButton
      icon="heroicons:arrow-up-tray"
      size="sm"
      :ui="
        {
          variant: {
            solid: `
              transition-colors
              dark:text-slate-400
              dark:bg-inherit
              dark:hover:bg-slate-900
            `,
          },
        }
      "
      @click="copyToClipboard"
    />
  </UTooltip>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const toast = useToast()
const { copy } = useClipboard()

const copyToClipboard = () => {
  toast.add({ title: 'Copied to clipboard!' })
  return copy(`${window.location.origin}${route.fullPath}`)
}
</script>
