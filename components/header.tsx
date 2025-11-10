'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: '关于我们', href: '#about' },
  { label: '团队成员', href: '#team' },
  { label: '公司位置', href: '#locations' },
  { label: '联系我们', href: '#contact' },
] as const

export function Header() {
  const navRef = React.useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [indicatorIndex, setIndicatorIndex] = React.useState(0)
  const [indicatorStyle, setIndicatorStyle] = React.useState<{ width: number; left: number } | null>(null)

  const updateIndicator = React.useCallback((index: number) => {
    const navNode = navRef.current
    if (!navNode) return
    const target = navNode.querySelector<HTMLElement>(`[data-nav-index="${index}"]`)
    if (!target) return
    setIndicatorStyle({ width: target.offsetWidth, left: target.offsetLeft })
  }, [])

  React.useEffect(() => {
    updateIndicator(indicatorIndex)
  }, [indicatorIndex, updateIndicator])

  React.useEffect(() => {
    updateIndicator(activeIndex)
  }, [activeIndex, updateIndicator])

  React.useEffect(() => {
    const handleResize = () => updateIndicator(indicatorIndex)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [indicatorIndex, updateIndicator])

  const handleNavLeave = () => setIndicatorIndex(activeIndex)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-gradient-to-r from-background/95 via-background/80 to-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md">
            <span className="font-mono text-lg font-bold">T</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-medium text-muted-foreground">TechVision</span>
            <span className="text-sm text-muted-foreground/80">智能企业信息</span>
          </div>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-1 rounded-full border border-border/70 bg-background/70 px-1 py-1 text-sm shadow-inner backdrop-blur-lg supports-[backdrop-filter]:bg-background/40 md:flex"
          onMouseLeave={handleNavLeave}
        >
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute top-1 bottom-1 rounded-full bg-primary/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out',
              indicatorStyle ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              width: indicatorStyle ? `${indicatorStyle.width}px` : undefined,
              transform: indicatorStyle ? `translateX(${indicatorStyle.left}px)` : undefined,
            }}
          />
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              data-nav-index={index}
              className={cn(
                'relative rounded-full px-4 py-2 font-medium transition-colors duration-200',
                indicatorIndex === index ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
              )}
              aria-current={activeIndex === index ? 'page' : undefined}
              onMouseEnter={() => setIndicatorIndex(index)}
              onFocus={() => setIndicatorIndex(index)}
              onClick={() => {
                setActiveIndex(index)
                setIndicatorIndex(index)
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button size="sm" variant="outline" className="md:hidden">
            联系我们
          </Button>
          <Button className="hidden md:inline-flex">加入我们</Button>
        </div>
      </div>
    </header>
  )
}
