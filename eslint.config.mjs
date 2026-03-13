// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
})
  .overrideRules({
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 5 }],
  })
  .prepend({
    rules: {
      'sort-imports': ['error'],
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/max-len': ['error', { code: 80 }],
    },
  })
