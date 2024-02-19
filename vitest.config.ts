import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    coverage: {
      reporter: ['text', 'cobertura'],
      exclude:['*.config.ts'],
    },
  },
})
