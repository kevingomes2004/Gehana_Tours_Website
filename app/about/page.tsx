import Image from "next/image"
import Link from "next/link"
import { Award, Users, Globe, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const stats = [
    { id: 1, value: "10+", label: "Years Experience" },
    { id: 2, value: "50+", label: "Destinations" },
    { id: 3, value: "10,000+", label: "Happy Travelers" },
    { id: 4, value: "4.9/5", label: "Customer Rating" },
  ]

  const team = [
    {
      id: 1,
      name: "Kwame Mensah",
      role: "Founder & CEO",
      image: "/images/team-1.jpg",
    },
    {
      id: 2,
      name: "Ama Darko",
      role: "Travel Specialist",
      image: "/images/team-2.jpg",
    },
    {
      id: 3,
      name: "Kofi Owusu",
      role: "Customer Experience",
      image: "/images/team-3.jpg",
    },
    {
      id: 4,
      name: "Abena Poku",
      role: "Marketing Director",
      image: "/images/team-4.jpg",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/images/about-hero.jpg" alt="About Ghana Tours" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About Ghana Tours</h1>
          <p className="text-white text-lg">Your trusted partner for unforgettable travel experiences</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2013, Ghana Tours began with a simple mission: to share the beauty of Ghana and Africa with
                the world while providing exceptional travel experiences that create lasting memories.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small local tour operator has grown into an international travel company offering
                curated experiences across the globe. Our passion for travel, attention to detail, and commitment to
                customer satisfaction have been the driving forces behind our growth and success.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we pride ourselves on creating personalized travel experiences that cater to diverse interests
                and preferences. Whether you're seeking adventure, relaxation, cultural immersion, or a mix of
                everything, our team of experienced travel specialists is dedicated to crafting the perfect itinerary
                for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Award-winning service</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Expert local guides</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Global destinations</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Satisfaction guaranteed</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/about-story.jpg" alt="Our story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-10">The passionate travel experts behind Ghana Tours</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-gray-600 mb-8">
            Contact our team today to plan your perfect trip. We're here to make your travel dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
