"use client"

import type React from "react"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"
import { BookOpen } from "lucide-react"

type LearningSkillCardProps = {
  skill: string
  progress: number
  icon: string
  darkMode: boolean
  description: string
  delay?: number
}

export const LearningSkillCard: React.FC<LearningSkillCardProps> = ({
  skill,
  progress,
  icon,
  darkMode,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`p-6 rounded-xl ${darkMode ? "bg-gray-800/80 hover:bg-gray-700/90" : "bg-white/90 hover:bg-gray-50"} shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-blue-500 group backdrop-blur-sm`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 shadow-md">
          <TechIcon name={icon} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{skill}</h3>
          <div className="flex items-center text-sm text-blue-400 mt-1">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>Learning in progress</span>
          </div>
        </div>
      </div>

      <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{description}</p>

      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700"}`}
            >
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className={`text-xs font-semibold inline-block ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              {progress}%
            </span>
          </div>
        </div>
        <div
          className={`overflow-hidden h-2 mb-4 text-xs flex rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-600"
          />
        </div>
      </div>
    </motion.div>
  )
}

