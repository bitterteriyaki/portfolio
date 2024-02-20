import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    coverage: {
      reporter: ['text', 'cobertura', 'html'],
      exclude:['*.config.ts', '**/.nuxt/**'],
    },
  },
})
