import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-lg font-bold text-primary-foreground">T</span>
          </div>
          <span className="text-xl font-semibold">TechVision</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-accent">
            关于我们-lenvo
          </Link>
          <Link href="#team" className="text-sm font-medium transition-colors hover:text-accent">
            团队成员
          </Link>
          <Link href="#locations" className="text-sm font-medium transition-colors hover:text-accent">
            公司位置
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-accent">
            联系我们
          </Link>
        </nav>

        <Button className="hidden md:inline-flex">加入我们</Button>
      </div>
    </header>
  )
}
