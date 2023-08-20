import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(rgb(76, 175, 80), rgb(156, 204, 101)))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, rgb(76, 175, 80), rgb(156, 204, 101))',
      },
    },
  },
  plugins: [],
}
export default config
