<template>
  <UContainer class="flex flex-col gap-6 max-w-3xl">
    <h2 class="text-4xl font-black">
      All Posts
    </h2>
    <ul class="flex flex-col gap-2">
      <ContentList v-slot="{ list }">
        <li v-for="post, idx in list" :key="idx">
          <NuxtLink :to="post._path">
            <div
              class="
                flex
                items-center
                justify-between
                p-4
                border
                rounded-lg
                transition-colors
                border-slate-900
                hover:border-slate-700
              "
            >
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold">
                  {{ post.title }}
                </h3>
                <PostTags :tags="post.tags" />
              </div>
              <p class="text-sm text-slate-400">
                {{ formatDate(post.publishedAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </UContainer>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

useHead({
  title: 'Blog',
})

definePageMeta({
  layout: 'blog',
})

const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM dd, yyyy')
}
</script>
