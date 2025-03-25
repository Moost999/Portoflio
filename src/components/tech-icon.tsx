import type React from "react"
import Image from "next/image"

type TechIconProps = {
  name: string
  className?: string
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6" }) => {
  // Normalize the name to lowercase and remove any spaces or special characters
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  
  // Map of normalized names to icon paths
  const iconMap: Record<string, string> = {
    javascript: "/icons/javascript.svg",
    js: "/icons/javascript.svg",
    typescript: "/icons/typescript.svg",
    ts: "/icons/typescript.svg",
    react: "/icons/react.svg",
    reactjs: "/icons/react.svg",
    prisma: "/icons/prisma.svg",
    nextjs: "/icons/nextjs.svg",
    next: "/icons/nextjs.svg",
    nodejs: "/icons/nodejs.svg",
    node: "/icons/nodejs.svg",
    express: "/icons/express.svg",
    expressjs: "/icons/express.svg",
    python: "/icons/python.svg",
    py: "/icons/python.svg",
    tailwind: "/icons/tailwind.svg",
    tailwindcss: "/icons/tailwind.svg",
    mongodb: "/icons/mongodb.svg",
    mongo: "/icons/mongodb.svg",
    sql: "/icons/sql.svg",
    sqlite: "/icons/sql.svg",
    mysql: "/icons/sql.svg",
    postgresql: "/icons/sql.svg",
    postgres: "/icons/sql.svg",
    git: "/icons/git.svg",
    arduino: "/icons/arduino.svg",
    esp32: "/icons/arduino.svg",
    java: "/icons/java.svg",
    spring: "/icons/spring.svg",
    springboot: "/icons/spring.svg",
    springframework: "/icons/spring.svg",
    springsecurity: "/icons/springsecurity.jpeg",
    springdatamongodb: "/icons/spring.svg",
    jwt: "/icons/jwt.png",
    angular:  "/icons/angular.svg",
    h2: "/icons/h2.png",
    api: "/icons/api.svg",
    pyautogui: "/icons/python.svg",
    framermotion: "/icons/framer.svg",
    framer: "/icons/framer.svg",
  }

  // Try to find the icon in our map
  const iconSrc = iconMap[normalizedName] || "/icons/code.svg"

  // Check if the file exists, if not use a fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/icons/python.svg"
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="w-full h-full object-contain"
        onError={handleImageError}
      />
    </div>
  )
}
