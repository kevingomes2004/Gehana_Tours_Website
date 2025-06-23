import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DestinationsPage() {
  const continents = [
    {
      id: 1,
      name: "Anuradhapura",
      image: "/images/anuradhapura.jpg",
      destinations: 8,
    },
    {
      id: 2,
      name: "Katharagama",
      image: "/images/yala2.jpg",
      destinations: 15,
    },
    {
      id: 3,
      name: "Kandy",
      image: "/images/kandy.jpg",
      destinations: 10,
    },
    {
      id: 4,
      name: "Galle",
      image: "/images/galle.jpg",
      destinations: 15,
    },
    {
      id: 5,
      name: "Hikkaduwa",
      image: "/images/hikkaduwa.jpg",
      destinations: 9,
    },
    {
      id: 6,
      name: "Polonnaruwa",
      image: "/images/polonnaruwa.jpg",
      destinations: 11,
    },
  ]

  const featuredDestinations = [
    {
      id: 1,
      name: "Nuwara Eliya",
      description: "Nuwara Eliya is a city in the hill country of the Central Province, Sri Lanka",
      image: "/images/nuwara_eliya.jpg",
      price: 1299,
    },
    {
      id: 2,
      name: "Ella",
      description:
        "Ella is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna",
      image: "/images/ella.jpg",
      price: 1499,
    },
    {
      id: 3,
      name: "Yala National Park",
      description:
        "Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka",
      image: "/images/yala.jpg",
      price: 1199,
    },
    {
      id: 4,
      name: "Sigiriya",
      description:
        "Ancient rock fortress and palace ruins surrounded by the remains of an extensive network of gardens",
      image: "/images/sigiriya_rock.jpg",
      price: 899,
    },
    {
      id: 5,
      name: "Mirissa",
      description: "Beautiful beach town known for whale watching and stunning sunsets",
      image: "/images/mirissa.jpg",
      price: 999,
    },
    {
      id: 6,
      name: "Dambulla",
      description: "Famous for the largest and best-preserved cave temple complex in Sri Lanka",
      image: "/images/dambulla.jpg",
      price: 799,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/images/sigiriya.jpg" alt="Sri Lankan destinations" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Explore Our Destinations</h1>
          <p className="text-white text-lg">
            Discover amazing places around Sri Lanka with our curated travel experiences
          </p>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Explore Popular Cities</h2>
          <p className="text-center text-gray-600 mb-10">Find your perfect destination in Sri Lanka</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {continents.map((continent) => (
              <Link key={continent.id} href={`/destinations/city/${continent.id}`}>
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-[200px]">
                    <Image
                      src={continent.image || "/placeholder.svg"}
                      alt={continent.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-semibold">{continent.name}</h3>
                      <p className="text-sm">{continent.destinations} destinations</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Destinations</h2>
          <p className="text-center text-gray-600 mb-10">Our most popular travel destinations in Sri Lanka</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <div className="text-blue-600 font-semibold">${destination.price}</div>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/destinations/${destination.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/tours">
                View All Destinations <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
