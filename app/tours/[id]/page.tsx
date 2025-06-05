"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, Users, MapPin, Star, Check, Info, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  // This would normally come from an API call using the ID
  const tour = {
    id: params.id,
    name: "Serengeti Safari Adventure",
    location: "Tanzania",
    duration: "7 days",
    groupSize: "10 people max",
    rating: 4.9,
    reviews: 28,
    price: 2499,
    description:
      "Experience the breathtaking wildlife of Tanzania on this unforgettable 7-day safari adventure. Witness the Great Migration, spot the Big Five, and immerse yourself in the natural beauty of the Serengeti National Park.",
    image: "/images/safari.jpg",
    gallery: ["/images/safari-1.jpg", "/images/safari-2.jpg", "/images/safari-3.jpg", "/images/safari-4.jpg"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Arrive at Kilimanjaro International Airport and transfer to your hotel in Arusha. Meet your guide for a tour briefing and welcome dinner.",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Drive to Tarangire National Park, famous for its large elephant herds and baobab trees. Enjoy a game drive and overnight at a safari lodge.",
      },
      {
        day: 3,
        title: "Serengeti National Park",
        description:
          "Head to the world-famous Serengeti National Park. Afternoon game drive to spot lions, leopards, and other wildlife.",
      },
      {
        day: 4,
        title: "Serengeti Full Day",
        description:
          "Full day in the Serengeti with morning and afternoon game drives. Witness the incredible ecosystem and abundant wildlife.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description:
          "Travel to Ngorongoro Conservation Area. Descend into the crater for a day of game viewing in one of Africa's most spectacular settings.",
      },
      {
        day: 6,
        title: "Lake Manyara",
        description:
          "Visit Lake Manyara National Park, known for its tree-climbing lions and diverse birdlife. Enjoy a picnic lunch and afternoon game drive.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Return to Arusha for lunch and souvenir shopping before transfer to Kilimanjaro Airport for your departure flight.",
      },
    ],
    includes: [
      "All accommodations (6 nights)",
      "Professional English-speaking guide",
      "All meals as specified in the itinerary",
      "All park entrance fees",
      "Game drives in 4x4 safari vehicle",
      "Airport transfers",
      "Bottled water during safari",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Gratuities for guides and staff",
      "Optional activities not mentioned in the itinerary",
    ],
    availableDates: [
      { date: "June 15, 2025", availability: "Available" },
      { date: "July 10, 2025", availability: "Limited" },
      { date: "August 5, 2025", availability: "Available" },
      { date: "September 20, 2025", availability: "Available" },
      { date: "October 15, 2025", availability: "Limited" },
    ],
  }

  const handleBookNow = () => {
    if (!selectedDate) {
      alert("Please select a departure date")
      return
    }

    // In a real app, you would pass the selected date and tour ID to the booking page
    router.push(`/booking?tour=${params.id}&date=${selectedDate}`)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill priority className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-medium">{tour.location}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{tour.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>{tour.groupSize}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{tour.rating}</span>
              <span className="ml-1">({tour.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                    <p className="text-gray-700 mb-6">{tour.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                        <ul className="space-y-2">
                          {tour.includes.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
                        <ul className="space-y-2">
                          {tour.excludes.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Info className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Important Information</h3>
                      <p className="mb-4">
                        This tour involves moderate physical activity and is suitable for most fitness levels. We
                        recommend bringing comfortable walking shoes, sun protection, and appropriate clothing for
                        varying weather conditions.
                      </p>
                      <p>
                        A valid passport with at least 6 months validity and a Tanzania visa are required for this tour.
                        We recommend purchasing travel insurance that covers medical emergencies and trip cancellation.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <div key={day.day} className="border-l-4 border-blue-600 pl-4">
                        <h3 className="text-xl font-semibold mb-2">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-gray-700">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">Tour Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div key={index} className="relative h-[250px] rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${tour.name} - Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Customer Reviews</h2>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="font-semibold">{tour.rating}</span>
                      <span className="text-gray-600 ml-1">({tour.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Sample reviews - in a real app, these would come from an API */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                              <h4 className="font-semibold">Michael T.</h4>
                              <p className="text-sm text-gray-600">Traveled April 2025</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          This safari exceeded all my expectations! Our guide was incredibly knowledgeable about the
                          wildlife and landscape. We saw all of the Big Five and the accommodations were luxurious yet
                          authentic. Highly recommend!
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                              <h4 className="font-semibold">Jennifer L.</h4>
                              <p className="text-sm text-gray-600">Traveled March 2025</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          An incredible journey through Tanzania! The Serengeti was breathtaking and we were fortunate
                          to witness the wildebeest migration. Our accommodations were comfortable and the food was
                          delicious. The entire trip was well-organized from start to finish.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                              <h4 className="font-semibold">Robert K.</h4>
                              <p className="text-sm text-gray-600">Traveled February 2025</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Great safari experience with knowledgeable guides and comfortable accommodations. We saw
                          amazing wildlife including lions, elephants, and giraffes. The only minor issue was that one
                          of our scheduled activities was canceled due to weather, but the team quickly arranged an
                          alternative.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-4">
                    ${tour.price} <span className="text-lg font-normal text-gray-600">per person</span>
                  </div>

                  <Separator className="my-4" />

                  <h3 className="font-semibold mb-3">Available Departure Dates</h3>
                  <div className="space-y-2 mb-6">
                    {tour.availableDates.map((dateOption, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 border rounded-md cursor-pointer transition-colors ${
                          selectedDate === dateOption.date ? "border-blue-600 bg-blue-50" : "hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedDate(dateOption.date)}
                      >
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <span>{dateOption.date}</span>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            dateOption.availability === "Limited" ? "text-orange-500" : "text-green-600"
                          }`}
                        >
                          {dateOption.availability}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button onClick={handleBookNow} className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                    Book Now
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    <p>No payment required to book</p>
                    <p>Free cancellation up to 30 days before departure</p>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h3 className="font-semibold">Need Help?</h3>
                    <p className="text-sm text-gray-600">
                      Our travel experts are here to assist you in planning your perfect trip.
                    </p>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-2" />
                      <span>+233 (0) 277 609 7365</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-2" />
                      <span>ghanatours@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
