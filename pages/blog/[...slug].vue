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
      <ContentRenderer
        :value="doc"
        class="
          prose
          dark:prose-invert
          prose-code:rounded-md
          prose-code:p-1
          dark:prose-p:text-slate-400
          dark:prose-h2:text-slate-300
          dark:prose-code:bg-gray-900
          dark:prose-strong:text-slate-300
          dark:prose-code:text-slate-300
          dark:prose-a:text-slate-300
        "
      />
      <UDivider />
      <PostMeta :tags="doc.tags" />
    </ContentDoc>
  </UContainer>
</template>
