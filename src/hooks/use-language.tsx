"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"

// English translations
const en = {
  nav: {
    about: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact Me",
  },
  hero: {
    subtitle:
      "Full-Stack Developer | NextJS | React | Node | Express | API | Java | UI | Tailwind CSS | Information Systems Student | Software Engineering",
    projectsBtn: "Projects",
    contactBtn: "Contact",
  },
  about: {
    title: "Resume (CV)",
    paragraphs: [
        "João – Developer | Information Systems",
        "Undergraduate student in Information Systems, passionate about programming and innovation. I strive to create technological solutions that optimize processes and positively impact businesses and people.",
        "I have experience with JavaScript, TypeScript, Node.js, React, Next.js, Python, and IoT integration using Arduino and ESP32. I have developed projects using Java, HTML, CSS, MongoDB, and SQL.",
        
    ],
    objectives: {
      title: "Objectives",
      items: [
        "Evolve as a senior developer, contributing to challenging and innovative projects.",
        "Create solutions that positively impact companies and people, focusing on innovation and social responsibility.",
      ],
    },
  },
  skills: {
    title: "Skills | Abilities",
    mainTitle: "My Expertise",
    learningTitle: "Currently Learning",
    learning: {
      java: "Learning Java for backend development with a focus on enterprise applications and microservices architecture. Building robust server-side applications with Java's powerful ecosystem.",
      spring:
        "Exploring Spring Framework for building scalable web applications, RESTful APIs, and microservices. Learning Spring Boot, Spring Security, and Spring Data for complete enterprise solutions.",
      angular: "Learning Angular for building modern web applications with a focus on performance and scalability. Exploring Angular's powerful features for creating dynamic and interactive user interfaces.",
    },
  },
  projects: {
    title: "My Projects",
    metaverse: {
      title: "Metaverse UX Project",
      description: "An immersive interface experience for the Metaverse developed with Next.js, demonstrating advanced UI/UX concepts with fluid animations and responsive design."
    },
    axxus: {
      title: "Axxus AI - WhatsApp AI Hub",
      description: "Complete platform for creating and managing AI agents on WhatsApp, integrating multiple AI models with a unified interface."
    },
    automation: {
      title: "ERP Interface Automation",
      description: "Python automation solution for repetitive ERP tasks, significantly reducing operational time through intelligent automation."
    },
    tickets: {
      title: "Corporate Gifts System",
      description: "Complete platform for managing and distributing tickets for corporate events with automated drawing features."
    },
    authSystem: {
      title: "Java & Angular Auth System",
      description: "Study project featuring a secure login system with Java/Spring backend and Angular frontend."
    },
    helloKitty: {
      title: "Hello Kitty Chat",
      description: "Personal real-time chat application built as a fun challenge, featuring custom theming and SSE technology."
    },
    portfolioApi: {
      title: "Portfolio API Backend",
      description: "Robust backend system for portfolio management with Java + Spring Boot, JWT authentication and MongoDB integration."
    }
  },
  contact: {
    title: "Get in Touch",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    messagePlaceholder: "How can I help you?",
    submitBtn: "Send Message",
    successMessage: "Thank you for your message! I'll get back to you soon.",
  },
  footer: {
    tagline: "Building the future, one line of code at a time",
    rights: "All rights reserved.",
  },
}

// Portuguese translations
const pt = {
  nav: {
    about: "Experiência",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    subtitle:
      "Desenvolvedor Full-Stack | NextJS | React | Node | Express | API | Java | UI | Tailwind CSS | Estudante de Sistemas De Informação | Engenharia De Software",
    projectsBtn: "Projetos",
    contactBtn: "Contato",
  },
  about: {
    title: "Resumo (CV)",
    paragraphs: [
      "João – Desenvolvedor | Sistemas de Informação",
      "Graduando em Sistemas de Informação, apaixonado por programação e inovação. Busco criar soluções tecnológicas que otimizam processos e impactam positivamente empresas e pessoas.",
      "Tenho experiência com JavaScript, TypeScript, Node.js, React, Next.js, Python e integração IoT com Arduino e ESP32. Desenvolvi projetos utilizando Java, HTML, CSS, MongoDB e SQL",
      "Objetivos: Evoluir como desenvolvedor sênior e contribuir para projetos inovadores com impacto real.",
    ],
    objectives: {
      title: "Objetivos",
      items: [
        "Evoluir como desenvolvedor sênior, contribuindo para projetos desafiadores e inovadores.",
        "Criar soluções que impactem positivamente empresas e pessoas, com foco na inovação e na responsabilidade social.",
      ],
    },
  },
  skills: {
    title: "Skills | Habilidades",
    mainTitle: "Minhas Especialidades",
    learningTitle: "Aprendendo Atualmente",
    learning: {
      java: "Aprendendo Java para desenvolvimento backend com foco em aplicações empresariais e arquitetura de microsserviços. Construindo aplicações robustas do lado do servidor com o poderoso ecossistema Java.",
      spring:
        "Explorando o Spring Framework para construir aplicações web escaláveis, APIs RESTful e microsserviços. Aprendendo Spring Boot, Spring Security e Spring Data para soluções empresariais completas.",
      angular: "Aprendendo Angular para construir aplicações web modernas com foco em desempenho e escalabilidade. Explorando os recursos poderosos do Angular para criar interfaces de usuário dinâmicas e interativas.",
    },
  },
  projects: {
    title: "Meus Projetos",
    metaverse: {
      title: "Projeto UX Metaverso",
      description: "Experiência imersiva de interface para o Metaverso desenvolvida com Next.js, demonstrando conceitos avançados de UI/UX com animações fluidas."
    },
    axxus: {
      title: "Axxus AI - Hub de IA para WhatsApp",
      description: "Plataforma completa para criação e gerenciamento de agentes de IA no WhatsApp, integrando múltiplos modelos de IA com interface unificada."
    },
    automation: {
      title: "Automação de Interfaces ERP",
      description: "Solução de automação em Python para tarefas repetitivas em ERPs, reduzindo significativamente o tempo operacional."
    },
    tickets: {
      title: "Sistema de Brindes Corporativos",
      description: "Plataforma completa para gerenciamento e distribuição de ingressos para eventos corporativos com sorteio automatizado."
    },
    authSystem: {
      title: "Sistema de Autenticação Java/Angular",
      description: "Projeto de estudo com backend Java/Spring e frontend Angular para sistema de login seguro."
    },
    helloKitty: {
      title: "Hello Kitty Chat",
      description: "Chat pessoal em tempo real desenvolvido como desafio divertido, com tema personalizado e tecnologia SSE."
    },
    portfolioApi: {
      title: "Backend do Portfólio",
      description: "Sistema backend robusto para gerenciamento de portfólio com autenticação JWT e integração MongoDB."
    }
  },
  contact: {
    title: "Entre em Contato",
    emailLabel: "Seu Email",
    messageLabel: "Sua Mensagem",
    messagePlaceholder: "Como posso ajudar?",
    submitBtn: "Enviar Mensagem",
    successMessage: "Obrigado pela sua mensagem! Entrarei em contato em breve.",
  },
  footer: {
    tagline: "Construindo o futuro, uma linha de código por vez",
    rights: "Todos os direitos reservados.",
  },
}

// Create context
type LanguageContextType = {
  language: string
  toggleLanguage: () => void
  t: typeof en | typeof pt
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  toggleLanguage: () => {},
  t: pt,
})

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("pt")
  const [translations, setTranslations] = useState(pt)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
  }

  useEffect(() => {
    setTranslations(language === "pt" ? pt : en)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Default export for standalone usage
export default function useLanguageStandalone() {
  const [language, setLanguage] = useState("pt")
  const [translations, setTranslations] = useState(pt)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
  }

  useEffect(() => {
    setTranslations(language === "pt" ? pt : en)
  }, [language])

  return { language, toggleLanguage, t: translations }
}