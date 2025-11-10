import Link from "next/link"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">T</span>
              </div>
              <span className="text-xl font-semibold">TechVision</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">用技术改变世界，用创新引领未来</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">公司信息</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-accent">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-muted-foreground hover:text-accent">
                  团队成员
                </Link>
              </li>
              <li>
                <Link href="#locations" className="text-muted-foreground hover:text-accent">
                  公司位置
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">产品服务</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                  企业解决方案
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                  云计算服务
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                  数据分析
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                  技术咨询
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">联系我们</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              北京市朝阳区建国路 88 号<br />
              SOHO 现代城
            </p>
            <div className="flex gap-2">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 TechVision. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
