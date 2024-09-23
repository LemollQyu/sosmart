/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      poppinsBold: ["poppinsBold", "sans-serif"],
      poppinsLight: ["poppinsLight", "sans-serif"],
      poppinsThin: ["poppinsThin", "sans-serif"],
      lora: ["lora", "sans-serif"],
	  oswald: ["oswald", "sans-serif"],
	  monstserrat: ["montserrat", "sans-serif"],
	  
    },
  },
  plugins: [],
}