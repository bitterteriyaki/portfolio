<template>
  <UContainer as="header" class="h-16 flex items-center justify-between">
    <UBreadcrumb
      :links="links"
      :ui="
        {
          li: 'dark:text-slate-500',
          base: `
            py-1
            px-2
            rounded-md
            transition-colors
            font-normal
            dark:hover:bg-gray-900
          `,
          active: 'dark:text-slate-400 dark:hover:text-slate-300',
          inactive: 'dark:hover:text-slate-400',
        }
      "
      divider="/"
    />
    <UInput
      color="white"
      variant="outline"
      icon="i-heroicons-magnifying-glass"
      placeholder="Search post..."
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
    to: '/'
  },
  {
    label: 'Blog',
    icon: 'i-heroicons-newspaper',
    to: '/blog'
  },
]
</script>
