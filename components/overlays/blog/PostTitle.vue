<template>
  <h1 class="font-black text-4xl">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
