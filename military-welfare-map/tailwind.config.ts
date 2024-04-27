import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "nsr": ["nanum-square-regular"],
        "nsb": ["nanum-square-bold"],
        "nse": ["nanum-square-extrabold"]
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
