/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'myBorder': '#D3D3D3',
      'navBar': '#38220F',
    },
    fontFamily: {
      'monseratFont': ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

