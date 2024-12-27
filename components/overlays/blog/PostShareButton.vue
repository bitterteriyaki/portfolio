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
              dark:bg-inherit
              dark:text-slate-400
              dark:hover:bg-slate-900
            `,
          },
        }
      "
      @click="copyUrl"
    />
  </UTooltip>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const toast = useToast()
const { copy } = useClipboard()

const copyUrl = () => {
  toast.add({ title: 'Copied to clipboard!' })
  return copy(`${window.location.origin}${route.fullPath}`)
}
</script>
