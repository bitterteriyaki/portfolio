<template>
  <UContainer as="header" class="h-24 flex items-center justify-between">
    <UBreadcrumb
      :links="links"
      :ui="
        {
          li: 'dark:text-slate-400',
          base: `
            py-1
            px-2
            rounded-md
            transition-colors
            font-normal
            hover:bg-slate-900
          `,
          active: 'dark:text-slate-400 dark:hover:text-slate-300',
        }
      "
      divider="/"
    />
  </UContainer>
</template>

<script setup lang="ts">
type Link = {
  label: string
  icon: string
  to: string
}

const links: Link[] = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Blog',
    icon: 'i-heroicons-newspaper',
    to: '/blog',
  },
]
</script>
