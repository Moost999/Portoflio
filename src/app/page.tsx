"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Mail, Sun, Github, Linkedin, Globe, Moon } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { ProjectCard } from "@/components/project-card"
import { SkillCard } from "@/components/skill-card"
import { LearningSkillCard } from "@/components/learning-skill-card"

export default function Page() {
  const [darkMode, setDarkMode] = useState(true)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted", { email, message })
    setEmail("")
    setMessage("")
    setFormSubmitted(true)

    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  const projects = [
    {
      title: t.projects.metaverse.title,
      description: t.projects.metaverse.description,
      link: "https://metaverseuxproject.vercel.app/",
      github: "https://github.com/Moost999/metaverseuxproject",
      technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
      images: ["/Meta.png"],
      video: "/desk.mp4",
    },
    {
      title: t.projects.axxus.title,
      description: t.projects.axxus.description,
      link: "https://axxusai.vercel.app/",
      github: "https://github.com/Moost999/AxxusAI",
      technologies: ["Next.js", "React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      images: ["/axxus.jpeg", "/axxus2.png", "/axxus3.png", "/axxus4.png"],
      video: "/axxusv2.mp4",
    },
    {
      title: t.projects.automation.title,
      description: t.projects.automation.description,
      link: "https://github.com/Moost999/AutomacaoERPMegaGUI",
      technologies: ["Python", "PyAutoGUI", "OpenCV", "Pandas"],
      images: ["/Sem.png"],
      video: "/video.mp4",
    },
    {
      title: t.projects.tickets.title,
      description: t.projects.tickets.description,
      link: "#",
      technologies: ["Nextjs", "React", "Node.js", "SQLite", "TailwindCSS"],
      images: ["/Bid2.png", "/bid3.png"],
      video: "/bid.mp4",
    },
    // {
    //   title: t.projects.facial.title,
    //   description: t.projects.facial.description,
    //   link: "#",
    //   technologies: ["Node.js", "Express", "React", "API Integration", "Facial Recognition"],
    //   images: ["/placeholder.svg?height=400&width=600"],
    //   video: null,
    // },
  ]

  const skills = [
    { skill: "JavaScript", level: 85, icon: "javascript" },
    { skill: "TypeScript", level: 80, icon: "typescript" },
    { skill: "React", level: 85, icon: "react" },
    { skill: "Next.js", level: 80, icon: "nextjs" },
    { skill: "Node.js", level: 75, icon: "nodejs" },
    { skill: "Express", level: 70, icon: "express" },
    { skill: "Python", level: 80, icon: "python" },
    { skill: "TailwindCSS", level: 90, icon: "tailwind" },
    { skill: "MongoDB", level: 70, icon: "mongodb" },
    { skill: "SQL", level: 75, icon: "sql" },
    { skill: "Git", level: 80, icon: "git" },
    { skill: "Arduino/ESP32", level: 75, icon: "arduino" },
  ]

  const learningSkills = [
    {
      skill: "Java",
      progress: 45,
      icon: "java",
      description: t.skills.learning.java,
    },
    {
      skill: "Spring Framework",
      progress: 30,
      icon: "spring",
      description: t.skills.learning.spring,
    },
  ]

  // These arrays are not being used, so we can remove them
  // const mainSkills = [
  //   { name: "JavaScript", icon: "javascript" },
  //   { name: "TypeScript", icon: "typescript" },
  //   { name: "React", icon: "react" },
  //   { name: "Next.js", icon: "nextjs" },
  //   { name: "Node.js", icon: "nodejs" },
  //   { name: "TailwindCSS", icon: "tailwind" },
  //   { name: "Python", icon: "python" },
  //   { name: "SQL", icon: "sql" },
  //   { name: "Git", icon: "git" },
  // ];

  // const learningSkills2 = [
  //   { name: "Docker", icon: "docker" },
  //   { name: "Kubernetes", icon: "kubernetes" },
  //   { name: "AWS", icon: "aws" },
  //   { name: "GCP", icon: "googlecloud" },
  //   { name: "Azure", icon: "azure" },
  // ];

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -150])

  // FadeInSection component with enhanced animations
  const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    )
  }

  // Animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Set document class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white dark" : "bg-gray-100 text-gray-900"}`}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress progress={scrollYProgress} />

      {/* Particle Background */}
      <ParticleBackground darkMode={darkMode} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold">João Vitor Gionda</span>
            <div className="flex items-center space-x-4">
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-500 transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection(skillsRef)} className="hover:text-blue-500 transition-colors">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-500 transition-colors">
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-500 transition-colors">
                {t.nav.contact}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={language === "en" ? "Switch to Portuguese" : "Switch to English"}
              >
                <Globe className="h-5 w-5" />
                <span className="ml-1 text-sm font-medium">{language === "en" ? "PT" : "EN"}</span>
              </button>

              {/* Dark Mode Toggle */}
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div style={{ y }} className="z-10 text-center px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          >
            João Vitor Gionda
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105"
              onClick={() => scrollToSection(projectsRef)}
            >
              {t.hero.projectsBtn}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600/10 transition-transform hover:scale-105"
              onClick={() => scrollToSection(contactRef)}
            >
              {t.hero.contactBtn}
            </Button>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 ${darkMode ? "bg-gradient-to-r from-blue-900 to-purple-900" : "bg-gradient-to-r from-blue-100 to-purple-100"} opacity-50`}
          ></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className={`absolute inset-0 ${darkMode ? "bg-blue-500" : "bg-blue-300"} opacity-30`}
          />
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-2 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <FadeInSection>
        <section ref={aboutRef} id="about" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{t.about.title}</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
                  <Image
                    src="/perfil.jpeg"
                    alt="João Vitor Gionda"
                    width={300}
                    height={300}
                    className="rounded-full relative mx-auto object-cover"
                  />
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                  <a href="https://www.linkedin.com/in/joaovitorgionda/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-blue-800 hover:bg-blue-700 transition-transform hover:scale-110"
                    >
                      <Linkedin className="h-4 w-4 bg-transparent" />
                    </Button>
                  </a>
                  <a href="https://github.com/Moost999" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-black hover:bg-gray-800 transition-transform hover:scale-110"
                    >
                      <Github className="h-4 w-4 bg-transparent" />
                    </Button>
                  </a>
                  <a href="mailto:jvgionda@hotmail.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-blue-600 hover:bg-blue-500 transition-transform hover:scale-110"
                    >
                      <Mail className="h-4 w-4 bg-transparent text-white" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="space-y-4">
                  {t.about.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">{t.about.objectives.title}</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {t.about.objectives.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Skills Section */}
      <FadeInSection>
        <section ref={skillsRef} id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t.skills.title}</h2>

            {/* Main Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-1 inline-block mr-3"></span>
                {t.skills.mainTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skill={skill.skill}
                    level={skill.level}
                    icon={skill.icon}
                    darkMode={darkMode}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-1 inline-block mr-3"></span>
                {t.skills.learningTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningSkills.map((skill, index) => (
                  <LearningSkillCard
                    key={index}
                    skill={skill.skill}
                    progress={skill.progress}
                    icon={skill.icon}
                    darkMode={darkMode}
                    description={skill.description}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section ref={projectsRef} id="projects" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t.projects.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section ref={contactRef} id="contact" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t.contact.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className={`w-full ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.messageLabel}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={`w-full ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`}
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-[1.01]"
              >
                {t.contact.submitBtn}
              </Button>
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-green-100 text-green-800 rounded-md"
                  >
                    {t.contact.successMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">João Vitor Gionda</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>{t.footer.tagline}</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Moost999"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaovitorgionda/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jvgionda@hotmail.com"
              className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} João Vitor Gionda. {t.footer.rights}
        </div>
      </footer>
    </div>
  )
}

