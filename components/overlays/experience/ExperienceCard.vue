<template>
  <NuxtLink
    class="
      group
      flex
      flex-col
      gap-2.5
      border-t
      border-t-transparent
      transition-all
      px-6
      py-4
      rounded-xl
      sm:px-6
      sm:py-4
      sm:max-w-xl
      sm:rounded-lg
      hover:shadow-lg
      hover:border-t-gray-800
      hover:bg-gray-900
      hover:bg-opacity-70
      hover:!opacity-100
      group-hover/list:opacity-40
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
    <p class="text-slate-400 text-sm">
      {{ job.description }}
    </p>
    <div class="flex flex-wrap gap-1 sm:gap-1.5">
      <Tag
        v-for="tech, idx in job.techs"
        :key="idx"
      >
        {{ tech }}
      </Tag>
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
