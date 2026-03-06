<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { format } from 'date-fns'
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const toast = useToast()
const { copy } = useClipboard()

const fetchPosts = () => queryCollection('blog').order('date', 'DESC').all()
const { data: posts } = await useAsyncData('posts', fetchPosts)

const navigation = computed<ContentNavigationItem[]>(() => {
  if (!posts.value)
    return []

  const postsByYear = posts.value.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()

    if (!acc[year])
      acc[year] = []

    acc[year].push({ title: post.title, path: post.path })
    return acc
  }, {} as Record<string, ContentNavigationItem[]>)

  return Object.entries(postsByYear)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([year, children]) => ({ title: year, path: year, children }))
})

const fetchPage = () => queryCollection('blog').path(route.path).first()
const { data: page } = await useAsyncData(route.path, fetchPage)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found.',
    message: 'The page you are looking for does not exist.',
    fatal: true,
  })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

const formattedDate = computed(() => {
  if (!page.value?.date)
    return null

  return format(new Date(page.value.date), 'PP')
})

const copyUrl = () => {
  toast.add({ title: 'URL copied to clipboard!' })
  return copy(`${window.location.origin}${route.fullPath}`)
}

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <UContainer class="my-10 px-8 sm:px-6">
    <UPage v-if="page">
      <template #left>
        <UPageAside>
          <UContentNavigation
            :navigation="navigation"
            color="neutral"
            highlight
          />
        </UPageAside>
      </template>

      <template #default>
        <ULink to="/blog" class="text-sm flex items-center gap-1">
          <UIcon name="heroicons:arrow-left-20-solid" />
          <span>Blog</span>
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <div class="flex justify-between items-center">
            <div class="text-sm text-muted flex flex-col justify-center">
              <span v-if="page.date">
                <UIcon name="heroicons:calendar" />
                {{ formattedDate }}
              </span>
              <span v-if="page.minRead">
                <UIcon name="heroicons:clock" />
                {{ page.minRead }} min read
              </span>
            </div>
            <UUser v-bind="page.author" />
          </div>
          <NuxtImg
            :src="page.image"
            :alt="page.title"
            class="rounded-xl w-full h-(300px) object-cover object-center"
          />
          <h1 class="text-4xl text-center font-black max-w-3xl mx-auto my-4">
            {{ page.title }}
          </h1>
          <USeparator />
          <ContentRenderer :value="page" />
          <USeparator />
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <UTooltip text="Tags" class="mr-2">
                <Icon name="heroicons:tag" size="1.25rem" />
              </UTooltip>
              <ul class="flex gap-1">
                <li v-for="tag, idx in page.tags" :key="idx">
                  <UBadge variant="soft" :ui="{ base: 'rounded-full' }">
                    {{ tag }}
                  </UBadge>
                </li>
              </ul>
            </div>
            <UTooltip text="Share this post">
              <UButton
                icon="heroicons:arrow-up-tray"
                variant="ghost"
                color="neutral"
                @click="copyUrl"
              />
            </UTooltip>
          </div>
        </div>
      </template>

      <template #right>
        <UPageAside>
          <UContentToc
            :links="page.body.toc?.links"
            color="neutral"
            highlight
          />
        </UPageAside>
      </template>
    </UPage>
  </UContainer>
</template>
