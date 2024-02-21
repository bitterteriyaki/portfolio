<template>
  <container
    class="
      flex
      flex-col
      items-center
      sm:items-stretch
      sm:grid
      sm:grid-flow-col
      sm:place-content-center
      gap-2
      sm:gap-4
    "
  >
    <h2
      class="
        text-center
        font-semibold
        sm:text-right
        text-3xl
      "
    >
      Who am I?
    </h2>
    <div
      v-if="isDesktopOrTablet"
      class="
        w-[2px]
        rounded-full
        bg-slate-700
      "
    />
    <div class="flex flex-col gap-4">
      <about-me-text>
        Hi, I am kyomi! I am a Brazilian full-stack developer, Linux enthusiast
        and Python proficient, currently studying Software Engineering course
        at the
        <fancy-link to="https://international.unb.br">
          <!--
            These brackets are a hack to avoid an extra space after the link.
          -->
          University of Brasília{{ }}
        </fancy-link>. I am passionate about technology and I am always looking
        for new challenges and adventures.
      </about-me-text>
      <about-me-text>
        When I am not coding, I am probably playing video games,
        watching animes or listening to music. I also have a blog where I
        write about math, programming and other things that I find
        interesting. Did you like my work? I am always open to new
        opportunities, so feel free to contact me. 😊
      </about-me-text>
    </div>
  </container>
</template>

<script setup lang="ts">
const { isDesktopOrTablet } = useDevice()
</script>
