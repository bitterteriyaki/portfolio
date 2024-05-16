import type { Config } from 'tailwindcss/types'
import defaultFamily from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: [
        'DM Sans',
        'DM Sans fallback',
        ...defaultFamily.fontFamily.sans,
      ],
    },
  },
  plugins: [typography],
}
