<template>
  <nuxt-link
    class="
      px-2
      py-1
      text-xs
      flex
      justify-center
      gap-1
      rounded-full
      border
      border-blue-400
      bg-blue-400
      text-blue-200
      bg-opacity-10
      transition-colors
      hover:border-blue-300
      hover:bg-blue-300
      hover:text-blue-100
      hover:bg-opacity-20
    "
    :to="to"
  >
    <slot />
    <icon
      name="heroicons:arrow-up-right-16-solid"
      size="16px"
    />
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
