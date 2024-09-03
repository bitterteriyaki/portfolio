<template>
  <div class="flex flex-col gap-1">
    <PostAuthor :published-at="publishedAt" />
    <PostButtons :tags="tags" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  publishedAt: {
    type: String,
    required: true,
  },
  tags: {
    type: Array<string>,
    required: true,
  },
})
</script>
