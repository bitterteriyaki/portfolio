<template>
  <Container>
    <hero />
    <div class="flex flex-col gap-20">
      <about-me />
      <latest-posts />
    </div>
  </Container>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
