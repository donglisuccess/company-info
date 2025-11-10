'use client'

import * as React from 'react'
import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : false
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="切换主题模式"
      className="relative overflow-hidden text-foreground/80 hover:text-foreground"
      onClick={toggleTheme}
    >
      <SunMedium
        aria-hidden="true"
        className={`h-4 w-4 transition-all duration-300 ${
          isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      <span className="sr-only">切换主题</span>
    </Button>
  )
}
