"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    dropdown: [
      {
        name: "Our Team",
        href: "/about/profile",
        description: "Meet the passionate individuals driving our mission.",
      },
      {
        name: "Mission Vision",
        href: "/about/mission",
        description: "Our mission and vision define our purpose and aspirations, guiding every step toward creating lasting impact and growth.Core principles that shape our culture and decisions.",
      },
      {
        name: "History",
        href: "/about/history",
        description: "Our journey from inception to industry leadership.",
      },
    ],
  },
  {
    "name": "Solutions",
    "dropdown": [
      {
        "name": "Passenger Vehicles",
        "href": "/solutions/passenger_vehicles",
        "description": "Affordable mobility with efficient performance and minimal maintenance."
      },
      {
        "name": "Two Wheeler",
        "href": "/solutions/two_wheeler",
        "description": "Smart mobility on two wheels—economical, reliable, and effortless."
      },
      {
        "name": "Commercial Vehicles",
        "href": "/solutions/commercial_vehicles",
        "description": "Strong, reliable, and built to keep your operations moving forward with efficient fleets designed."
      },
      {
        "name": "Automotive Lifestyle",
        "href": "/solutions/automotive_lifestyle",
        "description": "From custom designs to car events—connecting communities and celebrating automotive culture."
      },
      {
        "name": "Aeromotion",
        "href": "/solutions/aeromotion",
        "description": "Elevating flight: Where reliability meets innovation and breakthrough thinking."
      },
      {
        "name": "Agricultural & Industrial Transportation",
        "href": "/solutions/agricultural_industrial",
        "description": "Innovative mobility designed to move industries and harvest success."
      },
      {
        "name": "Marine Transportation",
        "href": "/solutions/marine_transportation",
        "description": "Smart marine mobility built for efficient, low-maintenance voyages."
      }
    ]
  },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md shadow-md border-b border-[rgba(255,255,255,0.1)] transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="EShElL Logo"
            width={120}
            height={60}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) =>
                item.dropdown ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-white hover:text-yellow-400 bg-transparent transition">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] bg-black/50 backdrop-blur-md gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-md shadow-lg">
                        {item.dropdown.map((drop) => (
                          <li key={drop.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={drop.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                              >
                                <div className="text-sm font-medium leading-none">{drop.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-200">{drop.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} text-white bg-transparent hover:text-yellow-400 transition`}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <button
        className="flex flex-col space-y-1"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/30 backdrop-blur-md shadow-lg border-b border-[rgba(255,255,255,0.1)]">
          <ul className="flex flex-col">
            {menuItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="border-b border-white/10">
                  <details>
                    <summary className="cursor-pointer px-4 py-2 font-medium text-white hover:bg-white/10">
                      {item.name}
                    </summary>
                    <ul className="pl-6">
                      {item.dropdown.map((drop) => (
                        <li key={drop.name}>
                          <Link
                            href={drop.href}
                            className="block px-4 py-2 text-white hover:bg-white/10 hover:text-white"
                            onClick={() => setOpen(false)}
                          >
                            {drop.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.name} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
