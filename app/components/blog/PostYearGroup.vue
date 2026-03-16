<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'

interface BlogYearGroupProps {
  year: string
  items: BlogCollectionItem[]
}

defineProps<BlogYearGroupProps>()
</script>

<template>
  <div>
    <h2
      class="
        text-sm
        font-semibold
        text-muted
        uppercase
        tracking-widest
        mb-6
        pb-2
        border-b
        border-default
      "
    >
      {{ year }}
    </h2>
    <ul class="flex flex-col gap-8">
      <li v-for="post in items" :key="post.id">
        <BlogPostCard :post="post" />
      </li>
    </ul>
  </div>
</template>
