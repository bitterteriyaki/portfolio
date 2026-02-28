<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    icon: 'i-heroicons-home-20-solid',
    to: '/',
    active: route.path === '/',
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
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <UAvatar src="/github/bitterteriyaki.png" size="lg" alt="kyomi" />
      </NuxtLink>
    </template>

    <template #default>
      <UNavigationMenu :items="items" color="neutral" highlight />
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

    <template #body>
      <UNavigationMenu
        :items="items"
        color="neutral"
        orientation="vertical"
        class="py-4"
      />
    </template>
  </UHeader>
</template>
