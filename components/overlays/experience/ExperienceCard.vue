<template>
  <NuxtLink
    :to="job.url"
    target="_blank"
    class="
      group
      flex
      flex-col
      gap-2
      border-t
      border-t-transparent
      transition-all
      py-3
      px-5
      rounded-xl
      sm:py-4
      sm:px-6
      sm:max-w-lg
      sm:rounded-lg
      hover:shadow-lg
      hover:!opacity-100
      hover:border-t-gray-800
      hover:bg-gray-900
      group-hover/list:opacity-40
    "
  >
    <div>
      <div
        class="
          flex
          flex-col
          items-start
          justify-between
          md:flex-row
          md:items-center
        "
      >
        <div class="flex items-center gap-0.5">
          <h3 class="font-bold text-base lg:text-lg">
            {{ job.company }}
          </h3>
          <Icon
            v-if="isDesktopOrTablet"
            name="heroicons:arrow-up-right-20-solid"
            size="1rem"
            class="
              group-hover:translate-x-1
              group-hover:-translate-y-1
              transition-transform
            "
          />
        </div>
        <span class="text-slate-500 text-sm">
          {{ job.startDate }} - {{ job.endDate }}
        </span>
      </div>
      <p class="text-slate-200 text-sm md:text-base">
        {{ job.title }}
      </p>
    </div>
    <p class="text-slate-400 text-sm">
      {{ job.description }}
    </p>
    <ul class="flex flex-wrap gap-1 sm:gap-1.5">
      <Tag
        v-for="tech, idx in job.techs"
        :key="idx"
      >
        {{ tech }}
      </Tag>
    </ul>
  </NuxtLink>
</template>

<script setup lang="ts">
export type Job = {
  title: string
  startDate: string
  endDate: string
  company: string
  description: string
  url: string
  techs: string[]
}

defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true,
  },
})

const { isDesktopOrTablet } = useDevice()
</script>
