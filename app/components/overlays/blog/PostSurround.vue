<script setup lang="ts">
const route = useRoute()
const key = `${route.path}-surround`

const fetchSurround = () => {
  return queryCollectionItemSurroundings('blog', route.path, {
    fields: ['description'],
  })
}

const { data: surround } = await useAsyncData(key, fetchSurround)
</script>

<template>
  <UContentSurround :surround="surround" />
</template>
