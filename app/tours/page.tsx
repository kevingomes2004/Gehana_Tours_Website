import Image from "next/image"
import Link from "next/link"
import { Clock, Users, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ToursPage() {
  const tourCategories = [
    { id: "all", name: "All Tours" },
    { id: "adventure", name: "Adventure" },
    { id: "cultural", name: "Cultural" },
    { id: "beach", name: "Beach" },
    { id: "wildlife", name: "Wildlife" },
  ]

  const tours = [
    {
      id: 1,
      name: "Serengeti Safari Adventure",
      location: "Tanzania",
      duration: "7 days",
      groupSize: "10 people max",
      rating: 4.9,
      reviews: 28,
      price: 2499,
      image: "/images/safari.jpg",
      category: "wildlife",
    },
    {
      id: 2,
      name: "Ancient Rome Exploration",
      location: "Italy",
      duration: "5 days",
      groupSize: "12 people max",
      rating: 4.8,
      reviews: 42,
      price: 1299,
      image: "/images/rome.jpg",
      category: "cultural",
    },
    {
      id: 3,
      name: "Bali Beach Retreat",
      location: "Indonesia",
      duration: "8 days",
      groupSize: "8 people max",
      rating: 4.7,
      reviews: 36,
      price: 1599,
      image: "/images/bali.jpg",
      category: "beach",
    },
    {
      id: 4,
      name: "Himalayan Trekking Expedition",
      location: "Nepal",
      duration: "12 days",
      groupSize: "8 people max",
      rating: 4.9,
      reviews: 19,
      price: 2199,
      image: "/images/himalaya.jpg",
      category: "adventure",
    },
    {
      id: 5,
      name: "Kyoto Cultural Immersion",
      location: "Japan",
      duration: "6 days",
      groupSize: "10 people max",
      rating: 4.8,
      reviews: 31,
      price: 1899,
      image: "/images/kyoto.jpg",
      category: "cultural",
    },
    {
      id: 6,
      name: "Caribbean Island Hopping",
      location: "Multiple Islands",
      duration: "9 days",
      groupSize: "12 people max",
      rating: 4.7,
      reviews: 24,
      price: 2299,
      image: "/images/caribbean.jpg",
      category: "beach",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/images/tours-hero.jpg" alt="Tour experiences" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Tours</h1>
          <p className="text-white text-lg">Unforgettable experiences crafted by travel experts</p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                {tourCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {tourCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tours
                    .filter((tour) => category.id === "all" || tour.category === category.id)
                    .map((tour) => (
                      <Card
                        key={tour.id}
                        className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full"
                      >
                        <div className="relative h-[200px]">
                          <Image
                            src={tour.image || "/placeholder.svg"}
                            alt={tour.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                            ${tour.price}
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>

                          <div className="flex items-center text-gray-600 mb-1">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{tour.location}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2 text-blue-600" />
                              <span>{tour.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users className="h-4 w-4 mr-2 text-blue-600" />
                              <span>{tour.groupSize}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span className="ml-1 font-medium">{tour.rating}</span>
                              <span className="ml-1 text-gray-600">({tour.reviews} reviews)</span>
                            </div>
                          </div>

                          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                            <Link href={`/tours/${tour.id}`}>View Details</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  )
}
