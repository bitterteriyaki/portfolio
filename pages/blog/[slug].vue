<template>
  <div class="mx-auto max-w-2xl py-32 sm:px-6 lg:px-8 px-4 flex flex-col gap-6">
    <content-doc v-slot="{ doc }">
      <nuxt-link :to="doc._path">
        <h1 class="text-4xl font-bold text-center underline text-slate-200">
          {{ doc.title }}
        </h1>
      </nuxt-link>
      <div class="flex flex-col gap-2">
        <author :published-at="doc.publishedAt" />
        <div class="flex gap-1">
          <tag
            v-for="tag in doc.tags"
            :key="tag"
            :tag="tag"
          >
            {{ tag }}
          </tag>
        </div>
      </div>
      <nuxt-img
        :src="doc.banner.url"
        :alt="doc.banner.alt"
        class="rounded-lg"
        placeholder
      />
      <content-renderer
        :value="doc"
        class="
          prose
          prose-invert
          dark:prose-p:text-slate-400
          dark:prose-h2:text-slate-300
          dark:prose-code:bg-gray-900
          dark:prose-strong:text-slate-300
          prose-code:rounded-md
          prose-code:px-1
          prose-code:py-0.5
          dark:prose-code:text-slate-300
          dark:prose-a:text-slate-300
        "
      />
    </content-doc>
  </div>
</template>
