<template>
  <div class="flex items-center gap-2">
    <nuxt-link to="/">
      <nuxt-img
        src="/github/bitterteriyaki.png"
        class="rounded-full w-12"
        placeholder
      />
    </nuxt-link>
    <div>
      <nuxt-link
        class="text-slate-200 hover:underline"
        to="/"
      >
        kyomi
      </nuxt-link>
      <p class="text-xs text-slate-400">
        {{ publishedAt }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  publishedAt: {
    type: String,
    required: true,
  },
})
</script>

<style>
.nuxt-content h2{
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #f8f8f2;
  background-color: red;
}
</style>
