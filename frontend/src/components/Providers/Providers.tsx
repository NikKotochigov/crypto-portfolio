"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

interface IProvidersProps {
    children: ReactNode
}

export const Providers = ({ children }: IProvidersProps) => {
    return (
        <ThemeProvider enableSystem attribute="class">
            {children}
        </ThemeProvider>
    )
}
