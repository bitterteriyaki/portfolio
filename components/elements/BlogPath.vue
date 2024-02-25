<template>
  <div class="text-slate-300 flex items-center gap-1">
    <blog-path-button to="/blog">
      Blog
    </blog-path-button>
    <span class="text-slate-400">
      /
    </span>
    <content-doc v-slot="{ doc }">
      <blog-path-button :to="doc._path">
        {{ doc.title }}
      </blog-path-button>
    </content-doc>
  </div>
</template>
