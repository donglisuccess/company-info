import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

const locations = [
  {
    name: "总部 - 北京",
    address: "北京市朝阳区建国路 88 号 SOHO 现代城",
    phone: "+86 10 8888 8888",
    email: "beijing@techvision.com",
    image: "/modern-office-building-in-beijing.jpg",
  },
  {
    name: "上海分公司",
    address: "上海市浦东新区陆家嘴环路 1000 号",
    phone: "+86 21 6666 6666",
    email: "shanghai@techvision.com",
    image: "/modern-office-building-in-shanghai.jpg",
  },
  {
    name: "深圳分公司",
    address: "深圳市南山区科技园南区深圳湾科技生态园",
    phone: "+86 755 8888 8888",
    email: "shenzhen@techvision.com",
    image: "/modern-office-building-in-shenzhen.jpg",
  },
  {
    name: "成都分公司",
    address: "成都市高新区天府大道中段 1366 号",
    phone: "+86 28 8888 8888",
    email: "chengdu@techvision.com",
    image: "/chengdu-office-building.png",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">公司位置</h2>
          <p className="text-lg text-muted-foreground">全国多地设有分支机构，为您提供便捷服务</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm">{location.email}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
