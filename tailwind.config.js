export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'montserrat': ["Montserrat"]
      },
    },
  },
  plugins: [],
}
