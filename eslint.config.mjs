// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // TODO(bitterteriyaki): Remove this rule later.
    'vue/multi-word-component-names': 'off',
  },
})
