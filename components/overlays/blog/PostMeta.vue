<template>
  <div class="flex items-center justify-between">
    <PostTags :tags="tags" />
    <ShareButton />
  </div>
</template>

<script setup lang="ts">
defineProps({
  tags: { type: Array<string>, required: true },
})
</script>
