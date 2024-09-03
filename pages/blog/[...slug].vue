<template>
  <UContainer class="max-w-4xl flex flex-col gap-4">
    <ContentDoc v-slot="{ doc }">
      <PostTitle :title="doc.title" :description="doc.description" />
      <UDivider />
      <PostMeta :published-at="doc.publishedAt" :tags="doc.tags" />
      <UDivider />
    </ContentDoc>
  </UContainer>
</template>
