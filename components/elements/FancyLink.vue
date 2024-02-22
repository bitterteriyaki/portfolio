<template>
  <nuxt-link
    :to="to"
    target="_blank"
    class="text-slate-200 underline"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
