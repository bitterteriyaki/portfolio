<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'

interface PostMetaProps {
  post: BlogCollectionItem
}

defineProps<PostMetaProps>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between">
      <PostTags :tags="post.tags" />
      <PostShareButton />
    </div>
    <PostSurround />
  </div>
</template>
