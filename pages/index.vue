<template>
  <Container>
    <Hero />
    <section class="flex flex-col gap-32">
      <AboutMe />
      <MyExperience />
    </section>
  </Container>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
