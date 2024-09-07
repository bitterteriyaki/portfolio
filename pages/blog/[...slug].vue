<template>
  <UContainer class="max-w-3xl flex flex-col gap-4">
    <ContentDoc v-slot="{ doc }">
      <div class="flex flex-col gap-2">
        <h1 class="font-black text-4xl text-slate-200">
          {{ doc.title }}
        </h1>
        <PostDate :published-at="doc.publishedAt" />
      </div>
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

<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})
</script>
