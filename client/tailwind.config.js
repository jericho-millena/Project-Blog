/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: ['./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#edbf43'
      },
      fontFamily: {
        body: ['Montserrat']
      },
      height: {
        'custom-height': ['34rem']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
