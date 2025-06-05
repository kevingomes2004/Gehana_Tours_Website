"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo-01.png"
                alt="Gehana Tours Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-brand-blue font-bold text-xl mr-1">Gehana</span>
              <span className="font-bold text-xl">Tours</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-brand-blue hover:bg-blue-700">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <span className="text-blue-600 font-bold text-xl mr-1">Ghana</span>
                    <span className="font-bold text-xl">Tours</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4 py-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-4 mx-4">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
