"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/Button"

export const ThemeToggle = (props: any) => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
		<Button
			variant="ghost"
			onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
			title="Toggle theme"
			{...props}
		>
			<Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
    )
}
