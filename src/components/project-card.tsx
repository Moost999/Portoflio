"use client"

import type React from "react"
import { useState, useEffect, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from "lucide-react"
import { TechIcon } from "./tech-icon"

type Project = {
  id?: string
  title: string
  description: string
  link: string | null
  github?: string
  technologies: string[]
  imagesUrl?: string[] | null
  videoUrl?: string | null
  images?: string[]
  video?: string | null
}

type ProjectCardProps = {
  project: Project
  index: number
  darkMode: boolean
}

// Função para converter URL do YouTube em URL de incorporação
const getYoutubeEmbedUrl = (url: string): string => {
  // Padrões de URL do YouTube
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/i,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`
    }
  }

  // Se não for um URL do YouTube reconhecido, retorna o URL original
  return url
}

// Função para verificar se é um URL do YouTube
const isYoutubeUrl = (url: string): boolean => {
  return url.includes("youtube.com") || url.includes("youtu.be")
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, darkMode }) => {
  // Normaliza os dados para garantir consistência usando useMemo para evitar recálculos desnecessários
  const normalizedImages = useMemo(() => project.images || project.imagesUrl || [], [project.images, project.imagesUrl])
  const normalizedVideo = useMemo(() => project.video || project.videoUrl || null, [project.video, project.videoUrl])

  // Verifica se o vídeo é do YouTube
  const isYoutubeVideo = useMemo(() => (normalizedVideo ? isYoutubeUrl(normalizedVideo) : false), [normalizedVideo])

  // Obtém a URL de incorporação do YouTube se aplicável
  const youtubeEmbedUrl = useMemo(
    () => (normalizedVideo && isYoutubeVideo ? getYoutubeEmbedUrl(normalizedVideo) : null),
    [normalizedVideo, isYoutubeVideo],
  )

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasImagesError, setHasImagesError] = useState<boolean[]>([])

  // Use useCallback para funções que são usadas em useEffect ou como dependências
  const initializeErrorState = useCallback(() => {
    if (normalizedImages && normalizedImages.length > 0) {
      setHasImagesError(new Array(normalizedImages.length).fill(false))
    } else {
      setHasImagesError([])
    }
  }, [normalizedImages])

  // Inicializa o estado de erro das imagens
  useEffect(() => {
    initializeErrorState()
  }, [initializeErrorState])

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (normalizedImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length)
    }
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (normalizedImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % normalizedImages.length)
    }
  }

  const toggleVideo = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVideoPlaying(!isVideoPlaying)
  }

  const handleImageError = (index: number) => {
    setHasImagesError((prev) => {
      const newErrors = [...prev]
      newErrors[index] = true
      return newErrors
    })
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

  // Determina a imagem atual ou fallback
  const currentImage =
    normalizedImages && normalizedImages.length > 0 && currentImageIndex < normalizedImages.length
      ? hasImagesError[currentImageIndex] || !normalizedImages[currentImageIndex]
        ? "/placeholder.svg"
        : normalizedImages[currentImageIndex]
      : "/placeholder.svg"

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
      className={`${darkMode ? "bg-gray-800/80" : "bg-white/90"} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-blue-500/20 h-full flex flex-col`}
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

      <div className="mb-4 relative aspect-video overflow-hidden rounded-lg group flex-1 min-h-[200px]">
        {currentImage &&
        typeof currentImage === "string" &&
        (currentImage.endsWith(".mp4") || currentImage.endsWith(".webm")) ? (
          <video
            src={currentImage}
            controls={isVideoPlaying}
            autoPlay={isVideoPlaying}
            muted
            loop
            className="rounded-lg object-cover w-full h-full"
          />
        ) : (
          <>
            <Image
              src={currentImage || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={340}
              className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              onError={() => handleImageError(currentImageIndex)}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {normalizedImages && normalizedImages.length > 1 && (
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
          </>
        )}

        {/* Video play button */}
        {normalizedVideo && (
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
        {normalizedImages && normalizedImages.length > 1 && (
          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {currentImageIndex + 1} / {normalizedImages.length}
          </div>
        )}
      </div>

      <p
        className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4 text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies?.map((tech, techIndex) => (
          <div
            key={techIndex}
            className="px-2 py-1 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white text-xs rounded-full flex items-center gap-1 shadow-sm"
          >
            <TechIcon name={tech} className="w-3 h-3" />
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {/* Área de vídeo - modificada para suportar YouTube */}
      {isVideoPlaying && normalizedVideo && (
        <div className="mb-3 w-full aspect-video">
          {isYoutubeVideo && youtubeEmbedUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={youtubeEmbedUrl}
              title={`${project.title} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ) : (
            <video width="100%" height="100%" controls autoPlay className="rounded-lg" preload="metadata">
              <source src={normalizedVideo} type="video/mp4" />
              <p>Your browser does not support the video tag.</p>
            </video>
          )}
        </div>
      )}

      <div className="flex space-x-4 mt-auto pt-2">
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

