<template>
  <UContainer>
    <Hero />
    <section class="flex flex-col gap-32">
      <AboutMe />
      <MyExperience />
    </section>
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
