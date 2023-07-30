/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      },
      backgroundImage: {
        'bg-header': 'linear-gradient(180deg,#df3a07,rgba(234,171,187,0) 99%,rgba(255,113,145,0) 0)'
      }
    }
  },
  plugins: []
}
