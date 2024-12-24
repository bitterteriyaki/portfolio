<template>
  <UButton
    :ui="{ rounded: 'rounded-full' }"
    :to="to"
    variant="soft"
    color="blue"
    icon="i-heroicons-arrow-up-right-20-solid"
    size="xs"
    class="transition-colors"
  >
    <slot />
  </UButton>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
