<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'
import { format } from 'date-fns'

interface PostInfoProps {
  post: BlogCollectionItem
}

const { post } = defineProps<PostInfoProps>()
</script>

<template>
  <div class="flex justify-between">
    <div class="text-sm text-muted">
      <div v-if="post.date" class="flex items-center gap-1">
        <UIcon name="i-heroicons-calendar" />
        <p>{{ format(new Date(post.date), 'PP') }}</p>
      </div>
      <div v-if="post.minRead" class="flex items-center gap-1">
        <UIcon name="i-heroicons-clock" />
        <p>{{ post.minRead }} min read</p>
      </div>
    </div>
    <UUser v-bind="post.author" />
  </div>
</template>
