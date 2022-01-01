module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {},
  },
 
  plugins: [
    require("@tailwindcss/typography"), 
    require("@tailwindcss/forms"), 
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ],
}