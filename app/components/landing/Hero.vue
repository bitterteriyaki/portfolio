<script setup lang="ts">
import type { PageHeroProps } from '@nuxt/ui'

const description = `
  I am a full-stack developer specializing in building modern web applications.
  With expertise in crafting robust software solutions, I create seamless and
  efficient digital experiences.
`

const links: PageHeroProps['links'] = [
  {
    to: 'https://github.com/bitterteriyaki',
    icon: 'mdi:github',
    variant: 'link',
    color: 'neutral',
  },
  {
    to: 'https://www.linkedin.com/in/bitterteriyaki',
    icon: 'mdi:linkedin',
    variant: 'link',
    color: 'neutral',
  },
  {
    to: 'https://www.instagram.com/bitterteriyaki',
    icon: 'mdi:instagram',
    variant: 'link',
    color: 'neutral',
  },
  {
    to: 'https://twitter.com/bitterteriyaki',
    icon: 'ri:twitter-x-fill',
    variant: 'link',
    color: 'neutral',
  },
]

const ui: PageHeroProps['ui'] = {
  container: 'items-center h-[calc(100vh-var(--ui-header-height)-20px)]',
  title: 'flex flex-col gap-4 items-center justify-center',
  description: 'sm:text-lg',
  links: 'gap-x-2',
}
</script>

<template>
  <UPageHero :ui="ui" :description="description" :links="links">
    <template #top>
      <LandingBackground />
    </template>

    <template #title>
      <NuxtImg
        src="/github/bitterteriyaki.png"
        class="rounded-full"
        sizes="130px sm:160px md:220px"
        alt="kyomi's avatar"
      />
      <h1 class="text-4xl font-black">
        Let me turn your ideas into
        <span
          class="
            bg-linear-to-r
            text-transparent
            bg-clip-text
            from-blue-600
            to-pink-600
            dark:from-blue-500
            dark:to-pink-400
          "
        >
          reality
        </span>
      </h1>
    </template>
  </UPageHero>
</template>
