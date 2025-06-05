import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Our Location",
      details: "76/5A Independence Avenue, Accra, Ghana",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Number",
      details: "+233 (0) 277 609 7365",
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Address",
      details: "ghanatours@gmail.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Working Hours",
      details: "Monday - Friday: 9am - 5pm",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/images/contact-hero.jpg" alt="Contact us" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white text-lg">We're here to help plan your perfect trip</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our tours or need help planning your trip? Fill out the form and our team will get
                back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            <div className="h-[500px] relative rounded-lg overflow-hidden">
              <Image src="/images/map-large.jpg" alt="Office location map" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-10">Find answers to common questions about our services</p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What types of tours do you offer?</h3>
              <p className="text-gray-600">
                We offer a wide range of tours including adventure tours, cultural experiences, beach getaways, wildlife
                safaris, and custom itineraries tailored to your preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do I book a tour?</h3>
              <p className="text-gray-600">
                You can book a tour through our website by visiting the booking page, or by contacting our team directly
                via phone or email. We'll guide you through the process and answer any questions you may have.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                Our standard cancellation policy allows for a full refund if cancelled 30 days before the tour date.
                Cancellations made 15-29 days before receive a 50% refund, and less than 15 days are non-refundable.
                Some tours may have specific policies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you offer group discounts?</h3>
              <p className="text-gray-600">
                Yes, we offer discounts for groups of 6 or more people. Please contact our team for specific group rates
                and availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
