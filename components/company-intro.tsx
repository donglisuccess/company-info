import { Building2, Users, Globe, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  { icon: Building2, label: "成立年份", value: "2015" },
  { icon: Users, label: "员工人数", value: "500+" },
  { icon: Globe, label: "服务国家", value: "30+" },
  { icon: Award, label: "行业奖项", value: "50+" },
]

export function CompanyIntro() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">关于 TechVision</h2>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            TechVision 成立于 2015 年，是一家专注于创新技术解决方案的领先企业。
            我们致力于通过前沿技术为客户创造价值，帮助企业实现数字化转型。
            凭333312借卓越的技术实力和专业的服务团队，我们已成为行业内备受信赖的合作伙伴。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
