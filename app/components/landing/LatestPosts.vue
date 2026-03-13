<script setup lang="ts">
const fetch = () => queryCollection('blog').order('date', 'DESC').limit(3).all()
const { data: posts } = await useAsyncData('latest-posts', fetch)

const { isMobile } = useDevice()
</script>

<template>
  <UContainer class="my-16">
    <div class="flex items-center justify-between mb-8">
      <h2
        class="
          text-3xl
          font-bold
          text-center
          sm:text-left
          dark:text-slate-300
        "
      >
        Latest Posts
      </h2>
      <UButton
        v-if="!isMobile"
        to="/blog"
        color="neutral"
        variant="link"
        trailing-icon="i-heroicons-arrow-right-20-solid"
      >
        View all
      </UButton>
    </div>
    <UBlogPosts>
      <UBlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :date="post.date"
        :image="post.image"
        :badge="post.tags?.[0]"
        :authors="post.author ? [post.author] : undefined"
        :to="post.path"
      />
    </UBlogPosts>
  </UContainer>
</template>
