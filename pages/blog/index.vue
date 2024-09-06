<template>
  <UContainer class="flex flex-col gap-6">
    <h2 class="text-4xl font-black">
      All Posts
    </h2>

    <ul>
      <ContentList v-slot="{ list }">
        <li v-for="post, idx in list" :key="idx">
          <NuxtLink
            :to="post._path"
            class="
              flex
              p-3
              gap-4
              border
              border-gray-900
              rounded-md
              hover:bg-gray-900
              hover:border-gray-700
              transition-colors
            "
          >
            <NuxtImg
              :src="post.banner.url"
              :alt="post.banner.alt"
              width="150"
              height="150"
              fit="outside"
            />
            <div class="flex flex-col gap-2 sm:gap-2">
              <h3 class="font-black text-xl">{{ post.title }}</h3>
              <div class="flex flex-col">
                <p class="text-sm">
                  {{ post.publishedAt }}
                </p>
                <ul class="flex flex-wrap gap-1 sm:gap-1.5">
                  <Tag v-for="tag, idx in post.tags" :key="idx">
                    {{ tag }}
                  </Tag>
                </ul>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
})
</script>
