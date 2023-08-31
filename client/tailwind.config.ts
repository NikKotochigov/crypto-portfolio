import typoghraphyPlugin from "@tailwindcss/typography"
import { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [
		typoghraphyPlugin,
	],
} satisfies Config

export default config