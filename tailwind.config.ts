import type { Config } from 'tailwindcss/types'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: [
        'DM Sans',
        'DM Sans fallback',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
}
