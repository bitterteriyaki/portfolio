<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const title = 'kyomi\'s portfolio and blog'
const description = ''

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-heroicons-home-20-solid',
    to: '/',
    active: route.path.startsWith('/'),
  },
  {
    label: 'Blog',
    icon: 'i-heroicons-document-text-20-solid',
    to: '/blog',
    active: route.path.startsWith('/blog'),
  },
  // {
  //   label: 'Projects',
  //   icon: 'i-heroicons-briefcase-20-solid',
  //   to: '/projects',
  //   active: route.path.startsWith('/projects'),
  // },
  // {
  //   label: 'Contact',
  //   icon: 'i-heroicons-chat-bubble-oval-left-20-solid',
  //   to: '/contact',
  //   active: route.path.startsWith('/contact'),
  // },
  // {
  //   label: 'Resume',
  //   icon: 'i-heroicons-document-check-20-solid',
  //   to: '/resume',
  //   active: route.path.startsWith('/resume'),
  // },
])

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s | kyomi',
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <UAvatar
          src="github/bitterteriyaki.png"
          size="lg"
          alt="kyomi's avatar"
        />
      </template>

      <template #default>
        <UNavigationMenu :items="items" color="neutral" />
      </template>

      <template #right>
        <UColorModeButton />
        <UButton
          to="/resume.pdf"
          target="_blank"
          color="neutral"
          variant="outline"
          trailing-icon="i-heroicons-document-check-20-solid"
        >
          Resume
        </UButton>
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/bitterteriyaki"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
