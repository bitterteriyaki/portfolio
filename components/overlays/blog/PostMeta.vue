<template>
  <section class="flex items-center justify-between">
    <PostTags :tags="tags" />
    <PostShareButton />
  </section>
</template>

<script setup lang="ts">
defineProps({
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>
