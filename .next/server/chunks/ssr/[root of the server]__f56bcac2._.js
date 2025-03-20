module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/hooks/use-language.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "default": (()=>useLanguageStandalone),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// English translations
const en = {
    nav: {
        about: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact Me"
    },
    hero: {
        subtitle: "Full-Stack Developer | React | Node | Express | API | NextJS | UI | Tailwind CSS | Information Systems Student | Software Engineering",
        projectsBtn: "Projects",
        contactBtn: "Contact"
    },
    about: {
        title: "Resume (CV)",
        paragraphs: [
            "Hello, I'm João, I'm 19 years old, studying Information Systems, looking to develop more practical experiences in the field of information technology. I'm passionate about programming and innovation, and I dedicate myself to creating technological solutions that have a real impact on people's daily lives and company performance.",
            "Throughout my journey, I've developed a proactive and creative profile, with experience in modern technologies such as JavaScript, TypeScript, Node.js, React, Next.js, Python, and IoT solution integration using Arduino and ESP32. What motivates me most is the possibility of transforming ideas into practical solutions that improve processes and simplify the lives of those who use them.",
            "I have projects in various technologies, including C#, JavaScript, HTML, CSS, React, Node.js, TypeScript and SQL, Arduino with ESP32."
        ],
        objectives: {
            title: "Objectives",
            items: [
                "Evolve as a senior developer, contributing to challenging and innovative projects.",
                "Create solutions that positively impact companies and people, focusing on innovation and social responsibility."
            ]
        }
    },
    skills: {
        title: "Skills | Abilities",
        mainTitle: "My Expertise",
        learningTitle: "Currently Learning",
        learning: {
            java: "Learning Java for backend development with a focus on enterprise applications and microservices architecture. Building robust server-side applications with Java's powerful ecosystem.",
            spring: "Exploring Spring Framework for building scalable web applications, RESTful APIs, and microservices. Learning Spring Boot, Spring Security, and Spring Data for complete enterprise solutions."
        }
    },
    projects: {
        title: "My Projects",
        metaverse: {
            title: "Metaverse UX Project",
            description: "An immersive interface experience for the Metaverse developed with Next.js. This project demonstrates advanced UI/UX concepts with fluid animations and responsive design, creating an engaging user experience that simulates navigation in a metaverse environment."
        },
        axxus: {
            title: "Axxus AI",
            description: "A complete hub for creating and managing Artificial Intelligence agents. Integrates multiple AI models (Gemini, LLama3, OpenAI) with a unified interface. Allows you to create, customize and manage virtual assistants for various applications, with support for natural language processing and content generation."
        },
        automation: {
            title: "ERP Interface Automation",
            description: "Automation solution for repetitive processes in ERP systems. Using Python and PyAutoGUI, this project automates data entry and manipulation tasks in graphical interfaces, significantly reducing operational time and eliminating human errors. Includes intelligent screen element detection and exception handling to ensure robustness."
        },
        tickets: {
            title: "Corporate Gifts System (Tickets)",
            description: "Complete platform for managing and distributing tickets and courtesies for corporate events. Developed with Next.js and SQLite, the system allows event registration, availability control, automated drawing and ticket distribution. Includes administrative panel for complete management and intuitive interface for end users."
        },
        facial: {
            title: "Facial Recognition Management System",
            description: "A system that integrates Intelbras' native API to manage Dahua and Intelbras devices. The solution allows user registration and facial recognition through an interface designed for receptions and companies, offering features such as turnstile management, user registration and real-time monitoring."
        }
    },
    contact: {
        title: "Get in Touch",
        emailLabel: "Your Email",
        messageLabel: "Your Message",
        messagePlaceholder: "How can I help you?",
        submitBtn: "Send Message",
        successMessage: "Thank you for your message! I'll get back to you soon."
    },
    footer: {
        tagline: "Building the future, one line of code at a time",
        rights: "All rights reserved."
    }
};
// Portuguese translations
const pt = {
    nav: {
        about: "Experiência",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contato"
    },
    hero: {
        subtitle: "Desenvolvedor Full-Stack | React | Node | Express | API | NextJS | UI | Tailwind CSS | Estudante de Sistemas De Informação | Engenharia De Software",
        projectsBtn: "Projetos",
        contactBtn: "Contato"
    },
    about: {
        title: "Resumo (CV)",
        paragraphs: [
            "Olá, sou João, tenho 19 anos, Graduando em Sistemas de Informação, afim de desenvolver mais experiências práticas na área de tecnologia da informação. Sou apaixonado por programação e inovação, e me dedico a criar soluções tecnológicas que tenham impacto real no dia a dia das pessoas e no desempenho das empresas.",
            "Ao longo da minha jornada, desenvolvi um perfil proativo e criativo, com experiência em tecnologias modernas como JavaScript, TypeScript, Node.js, React, Next.js, Python, e integração de soluções IoT utilizando Arduino e ESP32. O que mais me motiva é a possibilidade de transformar ideias em soluções práticas que melhorem processos e simplifiquem a vida de quem as utiliza.",
            "Tenho projetos realizados em diversas tecnologias, incluindo C#, JavaScript, HTML, CSS, React, Node.js, TypeScript e SQL, Arduino com ESP32."
        ],
        objectives: {
            title: "Objetivos",
            items: [
                "Evoluir como desenvolvedor sênior, contribuindo para projetos desafiadores e inovadores.",
                "Criar soluções que impactem positivamente empresas e pessoas, com foco na inovação e na responsabilidade social."
            ]
        }
    },
    skills: {
        title: "Skills | Habilidades",
        mainTitle: "Minhas Especialidades",
        learningTitle: "Aprendendo Atualmente",
        learning: {
            java: "Aprendendo Java para desenvolvimento backend com foco em aplicações empresariais e arquitetura de microsserviços. Construindo aplicações robustas do lado do servidor com o poderoso ecossistema Java.",
            spring: "Explorando o Spring Framework para construir aplicações web escaláveis, APIs RESTful e microsserviços. Aprendendo Spring Boot, Spring Security e Spring Data para soluções empresariais completas."
        }
    },
    projects: {
        title: "Meus Projetos",
        metaverse: {
            title: "Projeto UX Metaverso",
            description: "Uma experiência imersiva de interface para o Metaverso desenvolvida com Next.js. Este projeto demonstra conceitos avançados de UI/UX com animações fluidas e design responsivo, criando uma experiência de usuário envolvente que simula a navegação em um ambiente de metaverso."
        },
        axxus: {
            title: "Axxus AI",
            description: "Hub completo para criação e gerenciamento de agentes de Inteligência Artificial. Integra múltiplos modelos de IA (Gemini, LLama3, OpenAI) com uma interface unificada. Permite criar, personalizar e gerenciar assistentes virtuais para diversas aplicações, com suporte a processamento de linguagem natural e geração de conteúdo."
        },
        automation: {
            title: "Automação de Interfaces ERP",
            description: "Solução de automação para processos repetitivos em sistemas ERP. Utilizando Python e PyAutoGUI, este projeto automatiza tarefas de cadastro e manipulação de dados em interfaces gráficas, reduzindo significativamente o tempo operacional e eliminando erros humanos. Inclui detecção inteligente de elementos na tela e tratamento de exceções para garantir robustez."
        },
        tickets: {
            title: "Sistema De Brindes Corporativos",
            description: "Plataforma completa para gerenciamento e distribuição de ingressos e cortesias para eventos corporativos. Desenvolvido com Next.js e SQLite, o sistema permite o cadastro de eventos, controle de disponibilidade, sorteio automatizado e distribuição de ingressos. Inclui painel administrativo para gestão completa e interface intuitiva para usuários finais."
        },
        facial: {
            title: "Sistema de Gerenciamento de Reconhecimento Facial",
            description: "Um sistema que integra a API nativa da Intelbras para gerenciar dispositivos Dahua e Intelbras. A solução permite o cadastro de usuários e reconhecimento facial através de uma interface projetada para recepções e empresas, oferecendo recursos como gerenciamento de catracas, cadastro de usuários e monitoramento em tempo real."
        }
    },
    contact: {
        title: "Entre em Contato",
        emailLabel: "Seu Email",
        messageLabel: "Sua Mensagem",
        messagePlaceholder: "Como posso ajudar?",
        submitBtn: "Enviar Mensagem",
        successMessage: "Obrigado pela sua mensagem! Entrarei em contato em breve."
    },
    footer: {
        tagline: "Construindo o futuro, uma linha de código por vez",
        rights: "Todos os direitos reservados."
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    language: "pt",
    toggleLanguage: ()=>{},
    t: pt
});
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pt");
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(pt);
    const toggleLanguage = ()=>{
        setLanguage((prev)=>prev === "pt" ? "en" : "pt");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTranslations(language === "pt" ? pt : en);
    }, [
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t: translations
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-language.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
function useLanguageStandalone() {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pt");
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(pt);
    const toggleLanguage = ()=>{
        setLanguage((prev)=>prev === "pt" ? "en" : "pt");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTranslations(language === "pt" ? pt : en);
    }, [
        language
    ]);
    return {
        language,
        toggleLanguage,
        t: translations
    };
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>z),
    "useTheme": (()=>j)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var P = [
    "light",
    "dark"
], E = "(prefers-color-scheme: dark)", Q = typeof window == "undefined", L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0), D = {
    setTheme: (e)=>{},
    themes: []
}, j = ()=>{
    var e;
    return (e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(L)) != null ? e : D;
}, z = (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(L) ? e.children : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(O, {
        ...e
    }), N = [
    "light",
    "dark"
], O = ({ forcedTheme: e, disableTransitionOnChange: a = !1, enableSystem: n = !0, enableColorScheme: g = !0, storageKey: m = "theme", themes: c = N, defaultTheme: o = n ? "system" : "light", attribute: y = "data-theme", value: h, children: k, nonce: w })=>{
    let [i, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>M(m, o)), [S, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>M(m)), u = h ? Object.values(h) : c, R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((s)=>{
        let r = s;
        if (!r) return;
        s === "system" && n && (r = T());
        let v = h ? h[r] : r, C = a ? _() : null, x = document.documentElement;
        if (y === "class" ? (x.classList.remove(...u), v && x.classList.add(v)) : v ? x.setAttribute(y, v) : x.removeAttribute(y), g) {
            let I = P.includes(o) ? o : null, A = P.includes(r) ? r : I;
            x.style.colorScheme = A;
        }
        C == null || C();
    }, []), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((s)=>{
        let r = typeof s == "function" ? s(s) : s;
        d(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        e
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((s)=>{
        let r = T(s);
        l(r), i === "system" && n && !e && R("system");
    }, [
        i,
        e
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let s = window.matchMedia(E);
        return s.addListener(p), p(s), ()=>s.removeListener(p);
    }, [
        p
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let s = (r)=>{
            if (r.key !== m) return;
            let v = r.newValue || o;
            f(v);
        };
        return window.addEventListener("storage", s), ()=>window.removeEventListener("storage", s);
    }, [
        f
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        R(e != null ? e : i);
    }, [
        e,
        i
    ]);
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            theme: i,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: i === "system" ? S : i,
            themes: n ? [
                ...c,
                "system"
            ] : c,
            systemTheme: n ? S : void 0
        }), [
        i,
        f,
        e,
        S,
        n,
        c
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(L.Provider, {
        value: $
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(U, {
        forcedTheme: e,
        disableTransitionOnChange: a,
        enableSystem: n,
        enableColorScheme: g,
        storageKey: m,
        themes: c,
        defaultTheme: o,
        attribute: y,
        value: h,
        children: k,
        attrs: u,
        nonce: w
    }), k);
}, U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ forcedTheme: e, storageKey: a, attribute: n, enableSystem: g, enableColorScheme: m, defaultTheme: c, value: o, attrs: y, nonce: h })=>{
    let k = c === "system", w = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${y.map((u)=>`'${u}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, i = m ? (P.includes(c) ? c : null) ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", d = (l, u = !1, R = !0)=>{
        let f = o ? o[l] : l, p = u ? l + "|| ''" : `'${f}'`, $ = "";
        return m && R && !u && P.includes(l) && ($ += `d.style.colorScheme = '${l}';`), n === "class" ? u || f ? $ += `c.add(${p})` : $ += "null" : f && ($ += `d[s](n,${p})`), $;
    }, S = e ? `!function(){${w}${d(e)}}()` : g ? `!function(){try{${w}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${k})){var t='${E}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", !0)}}${k ? "" : "else{" + d(c, !1, !1) + "}"}${i}}catch(e){}}()` : `!function(){try{${w}var e=localStorage.getItem('${a}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", !0)}}else{${d(c, !1, !1)};}${i}}catch(t){}}();`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("script", {
        nonce: h,
        dangerouslySetInnerHTML: {
            __html: S
        }
    });
}), M = (e, a)=>{
    if (Q) return;
    let n;
    try {
        n = localStorage.getItem(e) || void 0;
    } catch (g) {}
    return n || a;
}, _ = ()=>{
    let e = document.createElement("style");
    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(e);
        }, 1);
    };
}, T = (e)=>(e || (e = window.matchMedia(E)), e.matches ? "dark" : "light");
;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__f56bcac2._.js.map