import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    trip: string
    rating: number
    comment: string
    avatar: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.trip}</p>
          </div>
        </div>

        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>

        <p className="text-gray-700">{testimonial.comment}</p>
      </CardContent>
    </Card>
  )
}
