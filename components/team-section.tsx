import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "张伟",
    position: "首席执行官",
    image: "/professional-asian-male-ceo-in-suit.jpg",
    bio: "拥有 15 年科技行业经验，曾任职于多家知名企业",
  },
  {
    name: "李娜",
    position: "首席技术官",
    image: "/professional-asian-female-cto.jpg",
    bio: "技术专家，主导多个大型项目的架构设计与实施",
  },
  {
    name: "王强",
    position: "产品总监",
    image: "/professional-asian-male-product-director.jpg",
    bio: "深耕产品领域 10 年，擅长用户体验设计与产品创新",
  },
  {
    name: "刘芳",
    position: "市场总监",
    image: "/professional-asian-female-marketing-director.jpg",
    bio: "市场营销专家，成功策划多个品牌推广活动",
  },
  {
    name: "陈明",
    position: "研发经理",
    image: "/professional-asian-male-developer.jpg",
    bio: "全栈工程师，热衷于探索新技术和最佳实践",
  },
  {
    name: "赵丽",
    position: "设计总监",
    image: "/professional-asian-female-design-director.jpg",
    bio: "创意设计师，作品多次获得国际设计大奖",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">核心团队</h2>
          <p className="text-lg text-muted-foreground">汇聚行业精英，共创美好未来</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-accent">{member.position}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
