import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'cobertura'],
      exclude:['*.config.ts'],
    },
  },
})
