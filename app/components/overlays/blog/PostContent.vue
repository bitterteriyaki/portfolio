<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'

interface PostContentProps {
  post: BlogCollectionItem
}

defineProps<PostContentProps>()
</script>

<template>
  <div class="flex flex-col gap-3 mt-8">
    <PostInfo :post="post" />
    <NuxtImg
      :src="post.image"
      :alt="post.title"
      class="rounded-xl w-full h-(300px) object-cover object-center"
    />
    <h1 class="text-4xl text-center font-black max-w-3xl mx-auto my-4">
      {{ post.title }}
    </h1>
    <ContentRenderer :value="post" />
    <USeparator />
    <PostMeta :post="post" />
  </div>
</template>
