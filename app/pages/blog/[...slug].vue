<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()

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
        <PostBackButton />
        <PostContent :post="page" />
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
