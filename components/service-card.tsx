import { Plane, Hotel, Users, Headset } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "plane":
        return <Plane className="h-10 w-10 text-brand-blue" />
      case "hotel":
        return <Hotel className="h-10 w-10 text-brand-blue" />
      case "users":
        return <Users className="h-10 w-10 text-brand-blue" />
      case "headset":
        return <Headset className="h-10 w-10 text-brand-blue" />
      default:
        return <Plane className="h-10 w-10 text-brand-blue" />
    }
  }

  return (
    <Card className="text-center hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">{getIcon(service.icon)}</div>
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </CardContent>
    </Card>
  )
}
