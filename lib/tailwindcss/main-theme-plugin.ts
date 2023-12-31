import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

const mainThemePlugin = plugin(
  function ({ addBase, addComponents }) {
    // Create Plugin
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "222.2 47.4% 11.2%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 47.4% 11.2%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--card": "0 0% 100%",
        "--card-foreground": "222.2 47.4% 11.2%",
        "--primary": "222.2 47.4% 11.2%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--destructive": "0 100% 50%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "219, 47%, 6%",
        "--foreground": "213 31% 91%",
        "--muted": "223 47% 11%",
        "--muted-foreground": "215.4 16.3% 56.9%",
        "--accent": "216 34% 17%",
        "--accent-foreground": "210 40% 98%",
        "--popover": "224 71% 4%",
        "--popover-foreground": "215 20.2% 65.1%",
        "--border": "216 34% 17%",
        "--input": "216 34% 17%",
        "--card": "224 71% 4%",
        "--card-foreground": "213 31% 91%",
        "--primary": "210 40% 98%",
        "--primary-foreground": "222.2 47.4% 1.2%",
        "--secondary": "222.2 47.4% 11.2%",
        "--secondary-foreground": "210 40% 98%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "216 34% 17%",
        "--radius": "0.5rem",
      },
    })
    addBase({
      "*": {
        " @apply border-border": {},
      },
      body: {
        " @apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    })
    addComponents({
      ".container": {
        padding: "0 120px",
        width: "100%",
        "@screen sm": {
          padding: "0 25px",
        },
        "@screen md": {
          padding: "0 40px",
        },
        "@screen lg": {
          padding: "0 60px",
        },
        "@screen xl": {
          padding: "0 80px",
        },
      },
      ".blog_container": {
        maxWidth: "1280px",
        padding: "0 40px",
        margin: "0 auto",
        width: "100%",
        "@screen sm": {
          padding: "0 25px",
        },
        "@screen md": {
          padding: "0 40px",
        },
        "@screen lg": {
          padding: "0 60px",
        },
        "@screen xl": {
          padding: "0 120px",
        },
      },
    })
  },
  //Create Theme etc.
  {
    corePlugins: { container: false },
    theme: {
      screens: {
        sm: { min: "0px", max: "414px" },
        md: { min: "415px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: { min: "1025px", max: "1440px" },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
        gridTemplateColumns: {
          seperator: "2fr 0.7fr 2fr",
        },
        backgroundImage: {
          "call-to-action-light":
            "url('../public/images/call_to_action_light_img.png')",
          "call-to-action-dark":
            "url('../public/images/call_to_action_dark_img.png')",
        },
      },
    },
  }
)

export default mainThemePlugin
