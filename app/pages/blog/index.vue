<script setup lang="ts">
const fetch = () => queryCollection('blog').order('date', 'DESC').all()
const { data: posts } = await useAsyncData('posts', fetch)
</script>

<template>
  <UBlogPosts>
    <UBlogPost
      v-for="post in posts"
      :key="post.id"
      :to="post.path"
      v-bind="post"
    />
  </UBlogPosts>
</template>
