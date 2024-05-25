<template>
  <NuxtLink
    class="
      group
      flex
      flex-col
      gap-4
      rounded-lg
      border-t
      border-t-transparent
      transition-all
      px-3
      py-3
      sm:max-w-xl
      sm:py-5
      sm:px-6
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
        <span class="font-bold text-sm sm:text-base">
          {{ job.company }}
        </span>
        <span class="text-xs sm:text-sm">
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
      <p class="text-slate-200 text-sm sm:text-base">
        {{ job.title }}
      </p>
    </div>
    <div class="flex flex-col gap-4 sm:gap-2">
      <p class="text-slate-400 text-xs sm:text-sm">
        {{ job.description }}
      </p>
      <div class="flex flex-wrap gap-1 sm:gap-2">
        <Tag
          v-for="tech, idx in job.techs"
          :key="idx"
        >
          {{ tech }}
        </Tag>
      </div>
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

const { isDesktopOrTablet } = useDevice()
</script>
