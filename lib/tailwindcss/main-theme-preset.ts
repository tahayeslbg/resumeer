import typographyPlugin from "@tailwindcss/typography"
import type { Config } from "tailwindcss"
// @ts-ignore
import animatePlugin from "tailwindcss-animate"

import mainThemePlugin from "./main-theme-plugin"

const mainThemePreset = {
  darkMode: ["class"],
  content: [],
  plugins: [mainThemePlugin, animatePlugin, typographyPlugin],
} satisfies Config

export default mainThemePreset
