<template>
  <div class="flex items-center gap-2">
    <UTooltip text="Tags">
      <Icon name="heroicons:tag" size="1.25rem" class="text-gray-400" />
    </UTooltip>
    <ul class="flex gap-1">
      <li v-for="tag, idx in tags" :key="idx">
        <Tag>
          {{ tag }}
        </Tag>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>
