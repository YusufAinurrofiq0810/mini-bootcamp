/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5871EB',
        default: '#282A2F',
        detail: '#1DAA97',
        delete: '#BC0000',
        'foreground-primary': '#202227'
      }
    }
  },
  plugins: []
}
