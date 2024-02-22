<template>
  <div class="flex flex-col gap-6 mb-10">
    <h2 class="text-3xl font-semibold text-center">
      Latest Posts
    </h2>
    <ul
      class="
        grid
        gap-4
        grid-cols-1
        place-content-center
        sm:grid-cols-2
        md:grid-cols-3
      "
    >
      <content-list
        v-slot="{ list }"
        path="/blog"
      >
        <blog-post
          v-for="post in list.slice(-4)"
          :key="post._path"
          :post="(post as BlogParsedContent)"
        />
      </content-list>
    </ul>
  </div>
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
</script>
