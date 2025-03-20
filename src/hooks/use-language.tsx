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
      "Full-Stack Developer | React | Node | Express | API | NextJS | UI | Tailwind CSS | Information Systems Student | Software Engineering",
    projectsBtn: "Projects",
    contactBtn: "Contact",
  },
  about: {
    title: "Resume (CV)",
    paragraphs: [
      "Hello, I'm João, I'm 19 years old, studying Information Systems, looking to develop more practical experiences in the field of information technology. I'm passionate about programming and innovation, and I dedicate myself to creating technological solutions that have a real impact on people's daily lives and company performance.",
      "Throughout my journey, I've developed a proactive and creative profile, with experience in modern technologies such as JavaScript, TypeScript, Node.js, React, Next.js, Python, and IoT solution integration using Arduino and ESP32. What motivates me most is the possibility of transforming ideas into practical solutions that improve processes and simplify the lives of those who use them.",
      "I have projects in various technologies, including C#, JavaScript, HTML, CSS, React, Node.js, TypeScript and SQL, Arduino with ESP32.",
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
    },
  },
  projects: {
    title: "My Projects",
    metaverse: {
      title: "Metaverse UX Project",
      description:
        "An immersive interface experience for the Metaverse developed with Next.js. This project demonstrates advanced UI/UX concepts with fluid animations and responsive design, creating an engaging user experience that simulates navigation in a metaverse environment.",
    },
    axxus: {
      title: "Axxus AI",
      description:
        "A complete hub for creating and managing Artificial Intelligence agents. Integrates multiple AI models (Gemini, LLama3, OpenAI) with a unified interface. Allows you to create, customize and manage virtual assistants for various applications, with support for natural language processing and content generation.",
    },
    automation: {
      title: "ERP Interface Automation",
      description:
        "Automation solution for repetitive processes in ERP systems. Using Python and PyAutoGUI, this project automates data entry and manipulation tasks in graphical interfaces, significantly reducing operational time and eliminating human errors. Includes intelligent screen element detection and exception handling to ensure robustness.",
    },
    tickets: {
      title: "Corporate Gifts System (Tickets)",
      description:
        "Complete platform for managing and distributing tickets and courtesies for corporate events. Developed with Next.js and SQLite, the system allows event registration, availability control, automated drawing and ticket distribution. Includes administrative panel for complete management and intuitive interface for end users.",
    },
    facial: {
      title: "Facial Recognition Management System",
      description:
        "A system that integrates Intelbras' native API to manage Dahua and Intelbras devices. The solution allows user registration and facial recognition through an interface designed for receptions and companies, offering features such as turnstile management, user registration and real-time monitoring.",
    },
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
      "Desenvolvedor Full-Stack | React | Node | Express | API | NextJS | UI | Tailwind CSS | Estudante de Sistemas De Informação | Engenharia De Software",
    projectsBtn: "Projetos",
    contactBtn: "Contato",
  },
  about: {
    title: "Resumo (CV)",
    paragraphs: [
      "Olá, sou João, tenho 19 anos, Graduando em Sistemas de Informação, afim de desenvolver mais experiências práticas na área de tecnologia da informação. Sou apaixonado por programação e inovação, e me dedico a criar soluções tecnológicas que tenham impacto real no dia a dia das pessoas e no desempenho das empresas.",
      "Ao longo da minha jornada, desenvolvi um perfil proativo e criativo, com experiência em tecnologias modernas como JavaScript, TypeScript, Node.js, React, Next.js, Python, e integração de soluções IoT utilizando Arduino e ESP32. O que mais me motiva é a possibilidade de transformar ideias em soluções práticas que melhorem processos e simplifiquem a vida de quem as utiliza.",
      "Tenho projetos realizados em diversas tecnologias, incluindo C#, JavaScript, HTML, CSS, React, Node.js, TypeScript e SQL, Arduino com ESP32.",
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
    },
  },
  projects: {
    title: "Meus Projetos",
    metaverse: {
      title: "Projeto UX Metaverso",
      description:
        "Uma experiência imersiva de interface para o Metaverso desenvolvida com Next.js. Este projeto demonstra conceitos avançados de UI/UX com animações fluidas e design responsivo, criando uma experiência de usuário envolvente que simula a navegação em um ambiente de metaverso.",
    },
    axxus: {
      title: "Axxus AI",
      description:
        "Hub completo para criação e gerenciamento de agentes de Inteligência Artificial. Integra múltiplos modelos de IA (Gemini, LLama3, OpenAI) com uma interface unificada. Permite criar, personalizar e gerenciar assistentes virtuais para diversas aplicações, com suporte a processamento de linguagem natural e geração de conteúdo.",
    },
    automation: {
      title: "Automação de Interfaces ERP",
      description:
        "Solução de automação para processos repetitivos em sistemas ERP. Utilizando Python e PyAutoGUI, este projeto automatiza tarefas de cadastro e manipulação de dados em interfaces gráficas, reduzindo significativamente o tempo operacional e eliminando erros humanos. Inclui detecção inteligente de elementos na tela e tratamento de exceções para garantir robustez.",
    },
    tickets: {
      title: "Sistema De Brindes Corporativos",
      description:
        "Plataforma completa para gerenciamento e distribuição de ingressos e cortesias para eventos corporativos. Desenvolvido com Next.js e SQLite, o sistema permite o cadastro de eventos, controle de disponibilidade, sorteio automatizado e distribuição de ingressos. Inclui painel administrativo para gestão completa e interface intuitiva para usuários finais.",
    },
    facial: {
      title: "Sistema de Gerenciamento de Reconhecimento Facial",
      description:
        "Um sistema que integra a API nativa da Intelbras para gerenciar dispositivos Dahua e Intelbras. A solução permite o cadastro de usuários e reconhecimento facial através de uma interface projetada para recepções e empresas, oferecendo recursos como gerenciamento de catracas, cadastro de usuários e monitoramento em tempo real.",
    },
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

