<template>
  <NuxtLink
    class="
      px-2
      py-1
      text-xs
      flex
      items-center
      gap-0.5
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
    <Icon
      name="heroicons:arrow-up-right-20-solid"
      size="1rem"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
