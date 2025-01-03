<template>
  <UContainer class="max-w-3xl flex flex-col gap-4">
    <ContentDoc v-slot="{ doc }">
      <section class="flex flex-col gap-2">
        <PostTitle :title="doc.title" />
        <PostDate :published-at="doc.publishedAt" />
      </section>
      <UDivider />
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})
</script>
