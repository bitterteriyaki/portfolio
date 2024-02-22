<template>
  <li>
    <nuxt-link
      :to="post._path"
      class="
        flex
        items-center
        p-3
        gap-4
        border-t
        rounded-lg
        bg-slate-900
        border-t-slate-800
        transition-colors
        hover:bg-slate-800
        hover:border-t-slate-700
      "
    >
      <nuxt-img
        :src="post.cover.url"
        :alt="post.title"
        class="
          h-16
          object-cover
          rounded-lg
        "
      />
      <div class="w-full">
        <div class="flex items-center gap-2">
          <h2 class="font-semibold">
            {{ post.title }}
          </h2>
          <div class="flex gap-1">
            <tag
              v-for="tag in post.tags"
              :key="tag"
              :tag="tag"
            />
          </div>
        </div>
        <p class="text-xs text-slate-400">
          {{ post.publishedAt }}
        </p>
      </div>
      <Icon
        name="heroicons:arrow-right-16-solid"
        size="26px"
        class="text-slate-400"
      />
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'


interface BlogParsedContent extends ParsedContent {
  cover: {
    url: string
    alt: string
  }
  banner: {
    url: string
    alt: string
  }
  publishedAt: string
  tags: string[]
}

defineProps<{
  post: BlogParsedContent
}>()
</script>
