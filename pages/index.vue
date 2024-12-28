<template>
  <UContainer>
    <div class="flex flex-col items-center justify-center h-dvh gap-4">
      <div class="flex flex-col items-center gap-4">
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
    <section class="flex flex-col gap-32">
      <UContainer
        class="
          flex
          items-center
          justify-center
          gap-4
          flex-col
          text-center
          lg:text-left
          lg:flex-row 
        "
      >
        <NuxtImg
          src="/img/objects.png"
          sizes="300px sm:400px md:500px"
          alt="Some different 3D objects in a blue shade"
        />
        <div class="flex flex-col gap-2 sm:gap-4 max-w-xl">
          <h2 class="text-4xl font-black">
            About Me
          </h2>
          <p class="text-slate-400">
            Howdy, I'm kyomi! A Brazilian full-stack developer, Linux enthusiast
            and free software evangelist, currently graduating in Software
            Engineering at the University of Brasília. I am passionate about
            technology and I'm always looking for new challenges and adventures.
          </p>
        </div>
      </UContainer>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
