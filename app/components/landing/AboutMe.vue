<script setup lang="ts">
</script>

<template>
  <UContainer class="grid gap-8 md:grid-cols-2 max-w-5xl">
    <div>
      <h2 class="text-3xl dark:text-slate-300 font-bold mb-4">
        About Me
      </h2>
      <p class="text-slate-500 dark:text-slate-400">
        I am a professional software engineer with a passion for creating
        innovative and efficient solutions. With several years of experience in
        the industry, I have honed my skills in various programming languages
        and frameworks. I thrive in collaborative environments and enjoy
        tackling complex challenges to deliver high-quality software products.
      </p>
    </div>
    <div>
      <h2 class="text-3xl dark:text-slate-300 font-bold mb-4">
        My Experience
      </h2>
      <div>
        <LandingWorkExperience
          title="Senior Software Engineer"
          company="Tech Solutions Inc."
          period="2021 - Present"
          description="Leading a team of developers to design and implement scalable web applications using modern technologies."
        />
      </div>
    </div>
  </UContainer>
</template>
