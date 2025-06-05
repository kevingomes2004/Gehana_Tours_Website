import { Clock, Shield, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  feature: {
    id: number
    title: string
    description: string
    icon: string
  }
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield className="h-10 w-10 text-brand-blue" />
      case "tag":
        return <Tag className="h-10 w-10 text-brand-blue" />
      case "clock":
        return <Clock className="h-10 w-10 text-brand-blue" />
      default:
        return <Shield className="h-10 w-10 text-brand-blue" />
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-colors">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">{getIcon(feature.icon)}</div>
        <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </CardContent>
    </Card>
  )
}
