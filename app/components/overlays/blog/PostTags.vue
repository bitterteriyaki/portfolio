<script setup lang="ts">
interface PostTagsProps {
  language?: string
  tags: string[]
}

defineProps<PostTagsProps>()
</script>

<template>
  <div class="flex items-center">
    <UTooltip text="Tags">
      <UIcon name="i-heroicons-tag" size="1.25rem" />
    </UTooltip>
    <ul class="ml-2 flex flex-wrap gap-1">
      <li>
        <UBadge color="neutral" variant="soft">
          {{ language || 'unknown' }}
        </UBadge>
      </li>
      <li v-for="tag in tags" :key="tag">
        <UBadge variant="soft">
          {{ tag }}
        </UBadge>
      </li>
    </ul>
  </div>
</template>
