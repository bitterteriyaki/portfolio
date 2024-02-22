import type { Config } from 'tailwindcss'
import defaultFamily from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'DM Sans fallback', ...defaultFamily.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
