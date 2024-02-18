import type { Config } from 'tailwindcss'
import defaultFamily from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: [
        'DM Sans',
        'DM Sans fallback',
        ...defaultFamily.fontFamily.sans,
      ],
      mono: [
        'JetBrains Mono',
        'JetBrains Mono fallback',
        ...defaultFamily.fontFamily.mono,
      ],
    },
  },
}
