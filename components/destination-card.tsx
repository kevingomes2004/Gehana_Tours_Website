import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface DestinationCardProps {
  destination: {
    id: number
    name: string
    description: string
    image: string
  }
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[200px]">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <Link
          href={`/destinations/${destination.id}`}
          className="text-brand-blue hover:text-blue-800 inline-flex items-center text-sm font-medium"
        >
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
