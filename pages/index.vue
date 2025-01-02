<template>
  <UContainer>
    <div
      class="
        flex
        flex-col
        items-center
        justify-center
        h-dvh
        gap-4
      "
    >
      <div
        class="
          flex
          flex-col
          items-center
          gap-4
        "
      >
        <NuxtImg
          src="/github/bitterteriyaki.png"
          class="rounded-full"
          sizes="130px sm:160px md:220px"
          alt="kyomi's avatar on GitHub"
        />
        <h1 class="text-4xl font-black">
          <span>
            Let me turn your<br>ideas into
          </span>
          <span
            class="
              bg-gradient-to-r
              from-blue-500
              to-pink-400
              text-transparent
              bg-clip-text
            "
          >
            reality
          </span>
        </h1>
      </div>
      <div class="flex justify-center gap-2">
        <Badge to="/pdfs/resume.pdf">
          Get my resume
        </Badge>
        <Badge to="/blog">
          Take a look at my new blog
        </Badge>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
