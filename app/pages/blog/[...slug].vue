<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { format } from 'date-fns'

const route = useRoute()

const fetchPosts = () => queryCollection('blog').order('date', 'DESC').all()
const { data: posts } = await useAsyncData('posts', fetchPosts)

const navigation = computed<ContentNavigationItem[]>(() => {
  if (!posts.value)
    return []

  return posts.value?.map(post => ({ title: post.title, path: post.path }))
})

const fetchPage = () => queryCollection('blog').path(route.path).first()
const { data: page } = await useAsyncData(route.path, fetchPage)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found.' })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})

const formattedDate = computed(() => {
  if (!page.value?.date)
    return null

  return format(new Date(page.value.date), 'PP')
})
</script>

<template>
  <UContainer class="mt-10 px-2">
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
          <h1 class="text-4xl text-center font-black max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>

          <ContentRenderer :value="page" />
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
