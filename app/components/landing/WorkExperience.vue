<script setup lang="ts">
export interface WorkExperienceItem {
  title: string
  company: string
  period: string
  description: string
}

defineProps<WorkExperienceItem>()
</script>

<template>
  <div>
    <h3 class="font-semibold mb-1">
      {{ title }} - <span class="font-normal">{{ company }}</span>
    </h3>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">{{ period }}</p>
    <p class="text-slate-600 dark:text-slate-300">{{ description }}</p>
  </div>
</template>
