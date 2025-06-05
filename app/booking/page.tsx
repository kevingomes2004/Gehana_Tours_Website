"use client"

import { Textarea } from "@/components/ui/textarea"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      toast({
        title: "Booking request submitted!",
        description: "We'll contact you shortly to confirm your booking details.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your booking request couldn't be processed. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Dream Vacation</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Fill out the form below to start planning your next adventure with Ghana Tours
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Booking Request</CardTitle>
              <CardDescription>Please provide your details and preferences for your trip</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Destination</Label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="switzerland">Switzerland</SelectItem>
                        <SelectItem value="italy">Italy</SelectItem>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="egypt">Egypt</SelectItem>
                        <SelectItem value="brazil">Brazil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Travel Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Number of Travelers</Label>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 person</SelectItem>
                          <SelectItem value="2">2 people</SelectItem>
                          <SelectItem value="3">3 people</SelectItem>
                          <SelectItem value="4">4 people</SelectItem>
                          <SelectItem value="5">5 people</SelectItem>
                          <SelectItem value="6+">6+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests or Questions</Label>
                  <Textarea id="specialRequests" className="min-h-[120px]" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Booking Request"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </main>
  )
}
