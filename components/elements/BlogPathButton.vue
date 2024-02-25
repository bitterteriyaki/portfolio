<template>
  <nuxt-link
    :to="to"
    class="
      text-slate-300
      hover:bg-slate-900
      px-2
      py-1
      rounded-lg
      transition-colors
    "
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: '/',
  },
})
</script>
