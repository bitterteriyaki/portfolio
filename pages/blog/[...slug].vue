<template>
  <UContainer class="max-w-3xl flex flex-col gap-4">
    <ContentDoc v-slot="{ doc }">
      <PostTitle :title="doc.title || 'Post'" :description="doc.description" />
      <PostDate :published-at="doc.publishedAt" />
      <UDivider />
      <NuxtImg
        :src="doc.banner.url"
        :alt="doc.banner.alt"
        class="rounded-lg"
        placeholder
      />
      <ContentRenderer :value="doc" />
      <UDivider />
      <PostMeta :tags="doc.tags" />
    </ContentDoc>
  </UContainer>
</template>
