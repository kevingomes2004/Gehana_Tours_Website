import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import DestinationCard from "@/components/destination-card"
import ServiceCard from "@/components/service-card"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  const destinations = [
    {
      id: 1,
      name: "Nuwara Eliya", 
      description: "Nuwara Eliya is a city in the hill country of the Central Province, Sri Lanka",
      image: "/images/nuwara_eliya.jpg",
    },
    {
      id: 2,
      name: "Ella",
      description: "Ella is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna",
      image: "/images/ella.jpg",
    },
    {
      id: 3,
      name: "Yala National Park",
      description: "Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka",
      image: "/images/yala.jpg",
    },
  ]

  const services = [
    {
      id: 1,
      title: "Custom Tours",
      description: "Tailored to your preferences",
      icon: "plane",
    },
    {
      id: 2,
      title: "Luxury Stays",
      description: "Premium accommodations",
      icon: "hotel",
    },
    {
      id: 3,
      title: "Local Guides",
      description: "Expert local knowledge",
      icon: "users",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Always here to help",
      icon: "headset",
    },
  ]

  const features = [
    {
      id: 1,
      title: "Trusted Agency",
      description: "Years of experience in tourism",
      icon: "shield",
    },
    {
      id: 2,
      title: "Best Prices",
      description: "Competitive rates guaranteed",
      icon: "tag",
    },
    {
      id: 3,
      title: "Fast Response",
      description: "Quick assistance always",
      icon: "clock",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      trip: "Caribbean Tour",
      rating: 5,
      comment: "Amazing experience! The tour was perfectly organized.",
      avatar: "/images/avatar-1.jpg",
    },
    {
      id: 2,
      name: "John R.",
      trip: "European Trip",
      rating: 5,
      comment: "Exceptional service and attention to detail.",
      avatar: "/images/avatar-2.jpg",
    },
    {
      id: 3,
      name: "David W.",
      trip: "Asia Adventure",
      rating: 5,
      comment: "Professional team and wonderful experience!",
      avatar: "/images/avatar-3.jpg",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/IMG_8209.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-white mb-2">Your Trusted Travelling Partner</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Explore the World with <br />
            Gehana Tours
          </h1>
          <p className="text-white text-lg mb-8">Creating Unforgettable Travel Experiences</p>
          <div>
            <Button asChild className="bg-brand-blue hover:bg-blue-700 text-white rounded-full px-8">
              <Link href="/tours">View Our Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Popular Destinations</h2>
          <p className="text-center text-gray-600 mb-10">Discover our most sought-after travel destinations</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-center text-gray-600 mb-10">Comprehensive travel solutions for your journey</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us</h2>
          <p className="text-center text-gray-300 mb-10">Experience the Ghana Tours difference</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">What Our Clients Say</h2>
          <p className="text-center text-gray-600 mb-10">Real experiences from real travelers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
          <p className="text-center text-gray-600 mb-10">Get in touch for your next adventure</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />

            <div className="rounded-lg overflow-hidden">
              <div className="h-[300px] relative">
                <Image src="/images/map.png" alt="Office location map" fill className="object-cover" />
              </div>
              <div className="bg-white p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand-blue mt-1 flex-shrink-0" />
                  <p>76/5A Batalandahena, Gothatuwa</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-brand-blue mt-1 flex-shrink-0" />
                  <p>+94 75 469 7968</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-brand-blue mt-1 flex-shrink-0" />
                  <p>gehanatours@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-brand-blue mt-1 flex-shrink-0" />
                  <p>www.gehanatours.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
