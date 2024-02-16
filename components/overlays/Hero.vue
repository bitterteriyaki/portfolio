<template>
  <Container
    class="
      h-dvh
      flex
      flex-col
      items-center
      justify-center
      gap-10
      md:grid
      md:grid-flow-col
    "
  >
    <Container class="flex items-center">
      <h1
        class="
          text-5xl
          font-[Inter]
          font-black
          text-center
          md:text-left
          pointer-events-none
      "
    >
        <span>
          Let me turn your<br>ideas into
        </span>
        <span
          class="
            bg-gradient-to-r
            from-blue-400
            to-pink-400
            text-transparent
            bg-clip-text
          "
        >
          reality
        </span>
      </h1>
    </Container>
    <div class="flex flex-col gap-4">
      <Container class="flex flex-col gap-4">
        <HeroText>
          Hello! My name is
          <span class="text-slate-300 font-black">kyomi</span>.
          I am a Brazilian full-stack developer, Linux enthusiast and Python
          proficient. Currently I am studying software engineering at the
          University of Brasília. I am passionate about technology and I am
          always looking for new challenges and opportunities.
        </HeroText>
        <HeroText>
          When I am not coding, I am probably playing video games,
          watching animes or listening to music. I also have a blog where I
          write about technology, programming and other things that I find
          interesting. I am always open to new opportunities and challenges,
          so feel free to contact me.
        </HeroText>
      </Container>

      <div class="flex justify-center gap-2">
        <Badge to="/blog">Take a look at my new blog</Badge>
        <Badge to="/pdfs/resume.pdf">Get my resume</Badge>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
</script>
