<script setup lang="ts">
import { format } from 'date-fns'

const fetch = () => queryCollection('blog').order('date', 'DESC').all()
const { data: posts } = await useAsyncData('posts', fetch)

const postsByYear = computed(() => {
  if (!posts.value)
    return []

  const grouped = posts.value.reduce((acc, post) => {
    if (!post.date)
      return acc

    const year = new Date(post.date).getFullYear().toString()

    if (!acc[year])
      acc[year] = []

    acc[year].push(post)
    return acc
  }, {} as Record<string, NonNullable<typeof posts.value>>)

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, items]) => ({ year, items }))
})

useHead({
  title: 'Blog',
})
</script>

<template>
  <UContainer class="py-12 px-8 sm:px-6">
    <div class="max-w-3xl mx-auto">
      <div class="mb-12">
        <h1 class="text-4xl font-black mb-3">
          Blog
        </h1>
        <p class="text-muted">
          Thoughts on math, algorithms, and software engineering.
        </p>
      </div>

      <div class="flex flex-col gap-12">
        <div v-for="{ year, items } in postsByYear" :key="year">
          <h2
            class="
              text-sm
              font-semibold
              text-muted
              uppercase
              tracking-widest
              mb-6
              pb-2
              border-b
              border-default
            "
          >
            {{ year }}
          </h2>
          <ul class="flex flex-col gap-8">
            <li v-for="post in items" :key="post.id">
              <NuxtLink
                :to="post.path"
                class="
                  group
                  flex
                  gap-5
                  p-2
                  items-start
                  rounded-xl
                  transition-colors
                  hover:bg-slate-100/50
                  dark:hover:bg-slate-900/50
                "
              >
                <NuxtImg
                  v-if="post.image"
                  :src="post.image"
                  :alt="post.title"
                  class="
                    rounded-lg
                    w-24
                    h-16
                    sm:w-40
                    sm:h-28
                    object-cover
                    object-center
                    shrink-0
                    transition-opacity
                    group-hover:opacity-75
                  "
                />
                <div class="flex flex-col gap-1.5">
                  <h3
                    class="
                      font-bold
                      leading-snug
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    {{ post.title }}
                  </h3>
                  <div class="flex items-center gap-3 text-xs text-muted">
                    <span v-if="post.date" class="flex items-center gap-1">
                      <UIcon name="i-heroicons-calendar" />
                      {{ format(new Date(post.date), 'PP') }}
                    </span>
                    <span v-if="post.minRead" class="flex items-center gap-1">
                      <UIcon name="i-heroicons-clock" />
                      {{ post.minRead }} min read
                    </span>
                  </div>
                  <div
                    v-if="post.tags?.length"
                    class="flex flex-wrap gap-1 mt-0.5"
                  >
                    <UBadge
                      v-for="tag in post.tags"
                      :key="tag"
                      variant="soft"
                      size="sm"
                      class="rounded-full"
                    >
                      {{ tag }}
                    </UBadge>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UContainer>
</template>
