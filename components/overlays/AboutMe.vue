<template>
  <Container
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
      alt="Some 3D different objects"
      sizes="300px sm:400px md:500px"
    />
    <div class="flex flex-col gap-2 sm:gap-4 max-w-xl">
      <h2 class="text-4xl font-black">
        About Me
      </h2>
      <p class="text-slate-400">
        Howdy, I'm kyomi! A Brazilian full-stack developer, Linux enthusiast and
        Python proficient, currently studying Software Engineering course at the
        University of Brasília. I am passionate about technology and I'm always
        looking for new challenges and adventures.
      </p>
    </div>
  </Container>
</template>
