"use client"

import Link from "next/link"
import { Utensils } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Utensils className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">pltly</span>
          </div>
          {/* <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {["About", "Blog", "Privacy", "Terms"].map((item) => (
              <motion.div key={item} className="px-5 py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav> */}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">{/* Add social media icons here if needed */}</div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">&copy; 2023 pltly. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

