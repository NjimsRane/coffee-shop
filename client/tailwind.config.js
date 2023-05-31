/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "30rem",
        "md": "43.75rem",
        "lg": "56.25rem",
        "xl": "75rem"
      }
    },

    colors: {
      "myBorder": "#D3D3D3",
      "navBar": "#38220F",
    },
    fontFamily: {
      'monseratFont': ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

