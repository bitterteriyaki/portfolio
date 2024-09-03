<template>
  <div>
    <h1 class="font-black text-4xl text-slate-200">
      {{ title }}
    </h1>
    <h2 class="text-slate-400">
      {{ description }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
