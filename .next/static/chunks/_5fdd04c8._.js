(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_5fdd04c8._.js", {

"[project]/src/hooks/use-language.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "default": (()=>useLanguageStandalone),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
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
        title: "Skills | Abilities"
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
        title: "Skills | Habilidades"
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    language: "pt",
    toggleLanguage: ()=>{},
    t: pt
});
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pt");
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pt);
    const toggleLanguage = ()=>{
        setLanguage((prev)=>prev === "pt" ? "en" : "pt");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            setTranslations(language === "pt" ? pt : en);
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t: translations
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-language.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
};
_s(LanguageProvider, "22mxFd2InJ2DEOVoCmcPoQUl1Yc=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useLanguageStandalone() {
    _s2();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pt");
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pt);
    const toggleLanguage = ()=>{
        setLanguage((prev)=>prev === "pt" ? "en" : "pt");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLanguageStandalone.useEffect": ()=>{
            setTranslations(language === "pt" ? pt : en);
        }
    }["useLanguageStandalone.useEffect"], [
        language
    ]);
    return {
        language,
        toggleLanguage,
        t: translations
    };
}
_s2(useLanguageStandalone, "22mxFd2InJ2DEOVoCmcPoQUl1Yc=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_5fdd04c8._.js.map