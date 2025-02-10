"use client"

import Link from "next/link"
// import { Button } from "@/components/ui/button"
import { Utensils } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setIsVisible(false)
        } else {
          // if scroll up show the navbar
          setIsVisible(true)
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <motion.nav
      className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Utensils className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">pltly</span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* <div className="hidden md:ml-6 md:flex md:space-x-8">
              {["Features", "Pricing", "About"].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div> */}
            {/* <div className="ml-6 flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <motion.button >Log in</motion.button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <motion.button>Sign up</motion.button>
              </motion.div>
            </div> */}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

