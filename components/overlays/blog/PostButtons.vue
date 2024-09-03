<template>
  <div class="flex items-center justify-between">
    <PostTags :tags="tags" />
    <ShareButton />
  </div>
</template>

<script setup lang="ts">
import PostTags from './PostTags.vue';

defineProps({
  tags: {
    type: Array<string>,
    required: true,
  },
})
</script>
