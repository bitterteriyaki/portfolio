<template>
  <h5 :id="props.id" class="text-lg font-medium text-slate-300">
    <NuxtLink v-if="props.id && generate" :href="`#${props.id}`">
      <slot />
    </NuxtLink>
    <slot v-else />
  </h5>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: '',
  },
})

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => {
  if (!props.id)
    return false

  if (typeof headings?.anchorLinks === 'boolean')
    return headings.anchorLinks

  if (typeof headings?.anchorLinks === 'object')
    return headings.anchorLinks.h5

  return false
})
</script>
