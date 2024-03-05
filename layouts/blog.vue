<template>
  <div>
    <container
      as="header"
      class="
        h-[--header-height]
        flex
        items-center
        justify-between
      "
    >
      <back to="/blog" />
      <blog-path />
    </container>
    <main class="py-10">
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<style>
:root {
  --header-height: 4rem;
}
</style>
