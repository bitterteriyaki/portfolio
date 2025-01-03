<template>
  <NuxtLink
    :href="props.href"
    :target="props.target"
    class="
      underline
      transition-colors
      decoration-slate-700
      hover:decoration-slate-500
    "
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<'_blank' | null | undefined>,
    default: undefined,
  },
})
</script>
