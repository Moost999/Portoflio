"use client"

import type React from "react"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"

type SkillCardProps = {
  skill: string
  level: number
  icon: string
  darkMode: boolean
  delay?: number
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, level, icon, darkMode, delay = 0 }) => {
  return (
    <motion.div
      className={`p-5 rounded-xl ${darkMode ? "bg-gray-800/80 hover:bg-gray-700/90" : "bg-white/90 hover:bg-gray-50"} shadow-lg transition-all duration-300 hover:shadow-xl group backdrop-blur-sm border border-transparent hover:border-blue-500/20`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 shadow-md">
          <TechIcon name={icon} className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold">{skill}</h3>
      </div>

      <div className="mb-1 text-sm font-medium flex justify-between">
        <span>Proficiency</span>
        <span>{level}%</span>
      </div>

      <div className={`w-full h-3 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">Beginner</span>
        <span className="text-xs text-gray-500">Expert</span>
      </div>
    </motion.div>
  )
}

