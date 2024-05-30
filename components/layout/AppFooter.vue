<template>
  <Container
    as="footer"
    class="h-24 flex items-center justify-between"
  >
    <div class="flex flex-col gap-1">
      <h3 class="font-black text-slate-200 text-base sm:text-lg">
        Social
      </h3>
      <ul class="flex gap-1.5">
        <li
          v-for="media, idx in medias"
          :key="idx"
        >
          <NuxtLink
            :href="media.link"
            target="_blank"
            rel="noopener noreferrer"
            class="
              transition-colors
              hover:text-slate-300
              text-slate-400
            "
          >
            <Icon
              :name="
                media.name === 'x'
                  ? `ri:twitter-x-fill`
                  : `mdi:${media.name}`
              "
              size="1.5rem"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <p class="text-slate-400 text-sm sm:text-base">
      Made with ❤️ by kyomi
    </p>
  </Container>
</template>

<script setup lang="ts">
const medias = [
  {
    name: 'github',
    link: 'https://github.com/bitterteriyaki',
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/bitterteriyaki',
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/bitterteriyaki',
  },
  {
    name: 'x',
    link: 'https://x.com/bitterteriyaki',
  },
  {
    name: 'envelope-outline',
    link: 'mailto:me@kyomi.dev',
  },
]
</script>
