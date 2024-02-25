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
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
:root {
  --header-height: 4rem;
}
</style>
