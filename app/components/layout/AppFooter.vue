<script setup lang="ts">
interface Media {
  to: string
  icon: string
  label: string
}

const urls: Media[] = [
  {
    to: 'https://github.com/bitterteriyaki',
    icon: 'i-simple-icons-github',
    label: 'GitHub',
  },
  {
    to: 'https://linkedin.com/in/bitterteriyaki',
    icon: 'i-simple-icons-linkedin',
    label: 'LinkedIn',
  },
  {
    to: 'https://instagram.com/bitterteriyaki',
    icon: 'i-simple-icons-instagram',
    label: 'Instagram',
  },
  {
    to: 'https://x.com/bitterteriyaki',
    icon: 'i-simple-icons-x',
    label: 'X',
  },
  {
    to: 'https://codeforces.com/profile/bitterteriyaki',
    icon: 'i-simple-icons-codeforces',
    label: 'Codeforces',
  },
  {
    to: 'mailto:me@kyomi.dev',
    icon: 'i-heroicons-envelope',
    label: 'Email',
  },
]
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        Made with ❤️ by kyomi
      </p>
    </template>

    <template #right>
      <UButton
        v-for="url in urls"
        :key="url.label"
        :to="url.to"
        :icon="url.icon"
        :aria-label="url.label"
        target="_blank"
        color="neutral"
        variant="link"
      />
    </template>
  </UFooter>
</template>
