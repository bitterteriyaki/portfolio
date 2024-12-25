<template>
  <UContainer class="max-w-3xl flex flex-col gap-4">
    <ContentDoc v-slot="{ doc }">
      <section class="flex flex-col gap-2">
        <PostTitle :title="doc.title" />
        <PostDate :published-at="doc.publishedAt" />
      </section>
      <UDivider />
      <NuxtImg
        v-if="doc.banner"
        :src="doc.banner.url"
        :alt="doc.banner.alt"
        class="rounded-lg"
        placeholder
      />
      <ContentRenderer
        :value="doc"
        tag="section"
        class="first:*:mt-0 last:*:mb-0"
      />
      <UDivider />
      <PostMeta :tags="doc.tags" />
    </ContentDoc>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})
</script>
