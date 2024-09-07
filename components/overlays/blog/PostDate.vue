<template>
  <div class="flex items-center gap-1.5">
    <Icon name="heroicons:calendar" size="1.25rem" class="text-slate-400" />
    <span class="text-sm text-slate-400">
      {{ formattedDate }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

const props = defineProps({
  publishedAt: { type: String, required: true },
})

const publishedAt = new Date(props.publishedAt)
const formattedDate = format(publishedAt, 'eee, dd LLL yyyy')
</script>
