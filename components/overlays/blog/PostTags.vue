<template>
  <div class="flex items-center rounded-md gap-2">
    <Icon name="heroicons:tag" size="1.25rem" class="text-slate-400" />
    <ul class="flex gap-1">
      <Tag v-for="tag, idx in tags" :key="idx">
        {{ tag }}
      </Tag>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tags: {
    type: Array<string>,
    required: true,
  },
})
</script>
