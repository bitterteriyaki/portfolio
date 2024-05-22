<template>
  <NuxtLink
    class="
      group
      flex
      flex-col
      gap-4
      p-5
      max-w-xl
      rounded
      border-t
      border-t-transparent
      transition-colors
      hover:shadow-lg
      hover:border-t-gray-800
      hover:bg-gray-900
      hover:bg-opacity-70
    "
    :to="job.url"
    target="_blank"
  >
    <div>
      <h3>
        <span class="font-bold">
          {{ job.company }}
        </span>
        <span class="text-sm">
          ({{ job.startDate }} - {{ job.endDate }})
        </span>
        <Icon
          name="heroicons:arrow-up-right-20-solid"
          size="1rem"
          class="
            group-hover:translate-x-1
            group-hover:-translate-y-1
            transition-transform
          "
        />
      </h3>
      <p class="text-slate-200">
        {{ job.title }}
      </p>
    </div>
    <div>
      <p class="text-slate-400">
        {{ job.description }}
      </p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Job } from '~/components/overlays/experience/MyExperience.vue'

defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true,
  },
})
</script>
