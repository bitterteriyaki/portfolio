<template>
  <div class="text-sm my-4">
    <pre class="codeblock"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})
</script>

<style lang="sass" scoped>
.codeblock
  @apply p-4
  @apply rounded-lg
  @apply border
  @apply border-slate-800
  @apply bg-slate-900
</style>
