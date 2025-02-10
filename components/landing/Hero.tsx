"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block">Track Your Calories</span>
            <span className="block text-primary-foreground">Achieve Your Goals</span>
          </motion.h1>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            pltly helps you easily track your daily calorie intake, set goals, and monitor your progress towards a
            healthier lifestyle.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="relative h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/placeholder.svg"
          alt="Person using pltly app"
          width={800}
          height={600}
        />
      </motion.div>
    </div>
  )
}

