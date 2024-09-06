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
      p-5
      rounded-xl
      sm:p-5
      sm:max-w-xl
      sm:rounded-lg
      hover:shadow-lg
      hover:border-t-gray-800
      hover:bg-gray-900
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
            translate-y-1
            group-hover:translate-x-1
            group-hover:-translate-y-0
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
</script>
