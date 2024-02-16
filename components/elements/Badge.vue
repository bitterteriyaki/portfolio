<template>
  <NuxtLink
    class="
      px-2
      py-0.5
      text-xs
      border
      border-blue-400
      text-blue-200
      bg-blue-400
      bg-opacity-10
      rounded-full
      flex
      items-center
    "
    :to="to"
  >
    <slot />
    <Icon name="heroicons:arrow-up-right-16-solid" size="16px" />
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
