<template>
  <UContainer as="footer" class="mt-12">
    <UDivider />
    <div class="h-24 flex items-center justify-between">
      <div class="flex flex-col gap-0.5">
        <h3 class="font-black text-slate-200 text-base sm:text-lg">
          Social
        </h3>
        <ul class="flex gap-1.5">
          <li v-for="media, idx in medias" :key="idx">
            <NuxtLink
              :href="media.url"
              :aria-label="media.ariaLabel"
              target="_blank"
              rel="noopener noreferrer"
              class="
                transition-colors
                text-slate-400
                hover:text-slate-300
              "
            >
              <Icon
                :name="icons[media.name] ?? `mdi:${media.name}`"
                size="1.5rem"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <p class="text-slate-400 text-sm sm:text-base">
        Made with ❤️ by kyomi
      </p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
type Media = {
  name: string
  url: string
  ariaLabel: string
}

type Icons = {
  [key: string]: string
}

const medias: Media[] = [
  {
    name: 'github',
    url: 'https://github.com/bitterteriyaki',
    ariaLabel: 'GitHub',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/bitterteriyaki',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/bitterteriyaki',
    ariaLabel: 'Instagram',
  },
  {
    name: 'x',
    url: 'https://x.com/bitterteriyaki',
    ariaLabel: 'X',
  },
  {
    name: 'codeforces',
    url: 'https://codeforces.com/profile/bitterteriyaki',
    ariaLabel: 'Codeforces',
  },
  {
    name: 'envelope-outline',
    url: 'mailto:me@kyomi.dev',
    ariaLabel: 'Email',
  },
]

const icons: Icons = {
  x: 'ri:twitter-x-fill',
  codeforces: 'simple-icons:codeforces',
}
</script>
