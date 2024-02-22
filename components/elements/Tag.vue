<template>
  <span
    :class="getClasses(tag)"
  >
    {{ tagsInfos[tag].fancyName }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: true,
  },
})

type TagInfo = {
  color: string
  fancyName: string
}

const tagsInfos: Record<string, TagInfo> = {
  nuxt: {
    color: 'green',
    fancyName: 'Nuxt',
  },
  vue: {
    color: 'green',
    fancyName: 'Vue',
  },
}

const getClasses = (tag: string) => {
  return `
    py-0.5
    px-1.5
    text-xs
    flex
    justify-center
    gap-1
    rounded-full
    border
    border-${tagsInfos[tag].color}-400
    bg-${tagsInfos[tag].color}-400
    text-${tagsInfos[tag].color}-200
    bg-opacity-10
    transition-colors
  `
}
</script>
