<template>
  <nuxt-link
    :to="to"
    class="
      flex
      items-center
      gap-1
      text-slate-300
      hover:bg-slate-900
      px-2
      py-1.5
      rounded-lg
      transition-colors
    "
  >
    <Icon
      name="heroicons:arrow-left-circle"
      size="24px"
    />
    Back
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
