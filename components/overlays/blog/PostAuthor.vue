<template>
  <div class="flex items-center gap-2">
    <NuxtLink to="/" class="flex">
      <UAvatar
        size="md"
        src="https://github.com/bitterteriyaki.png"
        alt="kyomi's avatar"
      />
    </NuxtLink>
    <div>
      <NuxtLink class="text-slate-200 font-black hover:underline" to="/">
        kyomi
      </NuxtLink>
      <p class="text-xs text-slate-400 leading-none">
        {{ formattedDate }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

const props = defineProps({
  publishedAt: {
    type: String,
    required: true,
  },
})

const publishedAt = new Date(props.publishedAt)
const formattedDate = format(publishedAt, 'eee, dd LLL yyyy')
</script>
