<template>
  <h3 :id="props.id" class="text-2xl font-semibold text-slate-300">
    <NuxtLink v-if="props.id && generate" :href="`#${props.id}`">
      <slot />
    </NuxtLink>
    <slot v-else />
  </h3>
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
    return headings.anchorLinks.h3

  return false
})
</script>
