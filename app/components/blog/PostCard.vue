<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'
import { format } from 'date-fns'

defineProps<{ post: BlogCollectionItem }>()
</script>

<template>
  <NuxtLink
    :to="post.path"
    class="
      group
      flex
      gap-5
      p-2
      items-start
      rounded-xl
      transition-colors
      hover:bg-slate-100/50
      dark:hover:bg-slate-900/50
    "
  >
    <NuxtImg
      v-if="post.image"
      :src="post.image"
      :alt="post.title"
      class="
        rounded-lg
        w-24
        h-16
        sm:w-40
        sm:h-28
        object-cover
        object-center
        shrink-0
      "
    />
    <div class="flex flex-col gap-1.5">
      <h3 class="text-lg font-bold leading-snug">
        {{ post.title }}
      </h3>
      <div class="flex items-center gap-3 text-sm text-muted">
        <span v-if="post.date" class="flex items-center gap-1">
          <UIcon name="i-heroicons-calendar" />
          {{ format(new Date(post.date), 'PP') }}
        </span>
        <span v-if="post.minRead" class="flex items-center gap-1">
          <UIcon name="i-heroicons-clock" />
          {{ post.minRead }} min read
        </span>
      </div>
      <div
        v-if="post.language || post.tags?.length"
        class="flex flex-wrap gap-1 mt-0.5"
      >
        <UBadge
          v-if="post.language"
          color="neutral"
          variant="soft"
          size="sm"
        >
          {{ post.language }}
        </UBadge>
        <UBadge
          v-for="tag in post.tags"
          :key="tag"
          variant="soft"
          size="sm"
        >
          {{ tag }}
        </UBadge>
      </div>
    </div>
  </NuxtLink>
</template>
