/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: { animation:{
      'spin-slow': 'spin 3s'

    }

    },
  },
  plugins: [],
}

