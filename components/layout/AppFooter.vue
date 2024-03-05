<template>
  <container
    as="footer"
    class="h-28 flex items-center justify-between"
  >
    <div class="flex items-center">
      <div class="flex flex-col gap-1">
        <h3 class="font-bold text-slate-200">
          Social
        </h3>
        <ul class="flex gap-2">
          <li
            v-for="media in medias"
            :key="media.name"
          >
            <a
              :href="media.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon
                :name="`mdi:${media.name}`"
                class="w-6 h-6 text-slate-400"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-slate-400">
      Made with ❤️ by kyomi
    </p>
  </container>
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
    name: 'twitter',
    link: 'https://twitter.com/bitterteriyaki',
  },
  {
    name: 'envelope-outline',
    link: 'mailto:me@kyomi.dev',
  }
]
</script>
