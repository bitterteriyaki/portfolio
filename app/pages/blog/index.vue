<script setup lang="ts">
const fetch = () => queryCollection('blog').order('date', 'DESC').all()
const { data: posts } = await useAsyncData('posts', fetch)

const searchGroups = computed(() => [{
  id: 'blog',
  label: 'Posts',
  items: posts.value?.map(post => ({
    label: post.title,
    suffix: post.description,
    to: post.path,
    icon: 'i-heroicons-document-text',
  })) || [],
}])

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
  <UContainer class="py-12">
    <div class="max-w-3xl mx-auto">
      <div class="mb-10">
        <div class="mb-2">
          <h1 class="text-4xl font-black mb-2">
            Blog
          </h1>
          <p class="text-muted">
            Thoughts on math, algorithms, and software engineering.
          </p>
        </div>
        <UContentSearchButton :collapsed="false" class="w-full" />
        <UContentSearch :groups="searchGroups" />
      </div>
      <div class="flex flex-col gap-12">
        <BlogPostYearGroup
          v-for="{ year, items } in postsByYear"
          :key="year"
          :year="year"
          :items="items"
        />
      </div>
    </div>
  </UContainer>
</template>
