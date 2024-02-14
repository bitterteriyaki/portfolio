<template>
  <component
    :is="as"
    class="
      mx-auto
      max-w-7xl
      sm:px-6
      lg:px-8
      px-4
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: 'div',
  },
})
</script>
