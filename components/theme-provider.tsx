"use client"

import * as React from "react"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

const FALLBACK_THEMES = ["aurora", "light", "dark"] as const

export function ThemeProvider({
  children,
  themes,
  ...props
}: ThemeProviderProps) {
  const mergedThemes = React.useMemo(() => {
    if (!themes?.length) {
      return [...FALLBACK_THEMES]
    }

    const nextThemes = new Set<string>([...themes, ...FALLBACK_THEMES])
    return Array.from(nextThemes)
  }, [themes])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="aurora"
      enableSystem
      themes={mergedThemes}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
