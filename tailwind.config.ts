import { type Config } from "tailwindcss"
import mainThemePreset from "./lib/tailwindcss/main-theme-preset"

const config = {
  presets: [mainThemePreset],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
} satisfies Config

export default config