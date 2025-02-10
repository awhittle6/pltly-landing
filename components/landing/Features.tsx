"use client"

import { Smartphone, BarChart2, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "Easy Tracking",
    description: "Quickly log your meals and snacks with our intuitive interface.",
    icon: Smartphone,
  },
  {
    name: "Detailed Analytics",
    description: "Get insights into your eating habits with comprehensive charts and graphs.",
    icon: BarChart2,
  },
  {
    name: "Goal Setting",
    description: "Set personalized calorie goals and track your progress over time.",
    icon: Zap,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            className="text-base text-primary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to track your calories
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            pltly provides all the tools you need to monitor your calorie intake and achieve your health goals.
          </motion.p>
        </div>

        <motion.div className="mt-10" variants={containerVariants} initial="hidden" animate="visible">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative" variants={itemVariants}>
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}

