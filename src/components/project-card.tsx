"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from 'lucide-react'
import { TechIcon } from "./tech-icon"

type Project = {
  title: string
  description: string
  link: string
  github?: string
  technologies: string[]
  images: string[]
  video: string | null
}

type ProjectCardProps = {
  project: Project
  index: number
  darkMode: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, darkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`${darkMode ? "bg-gray-800/80" : "bg-white/90"} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-blue-500/20`}
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <div className="mb-4 relative aspect-video overflow-hidden rounded-lg group">
        <Image
          src={project.images[currentImageIndex] || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Video play button */}
        {project.video && (
          <button
            onClick={toggleVideo}
            className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm"
          >
            {isVideoPlaying ? (
              <>
                <Pause className="w-4 h-4" /> Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Play Demo
              </>
            )}
          </button>
        )}

        {/* Image counter */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        )}
      </div>

      <p
        className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4 text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <div 
            key={techIndex} 
            className="px-2 py-1 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white text-xs rounded-full flex items-center gap-1 shadow-sm"
          >
            <TechIcon name={tech} className="w-3 h-3" />
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {isVideoPlaying && project.video && (
        <div className="mb-3">
          <video width="100%" height="200" controls autoPlay className="rounded-lg" preload="metadata">
            <source src={project.video} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      )}

      <div className="flex space-x-4 mt-auto">
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}
