/** @type {import('tailwindcss').Config} */

import { withAnimations } from "animated-tailwindcss";

module.exports = withAnimations({
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
});

// export default {
// 	darkMode: "class",
// 	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [require("@tailwindcss/typography")],
// };
