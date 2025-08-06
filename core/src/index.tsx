import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

import ReactDOM from 'react-dom/client';

import './index.css'; 
import { images, documents } from './assets';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type Translations = {
    [key: string]: any;
};

const translations: Translations = {
    pt: {
        available: "Disponível para novos projetos",
        title: "Eduardo Gelain",
        subtitle: "Desenvolvedor de Software & Game Developer",
        resume: "Currículo",
        aboutTitle: "Sobre Mim",
        aboutText: "Como estudante de <strong>Engenharia da Computação</strong> com uma paixão profunda por desenvolvimento de software e jogos, meu foco é transformar desafios complexos em soluções elegantes e de alta performance. Minha experiência abrange desde a criação de experiências de gameplay imersivas em <strong>Unity e C#</strong> até a engenharia de ferramentas eficientes para <strong>automação de sistemas em Python</strong>. Este portfólio demonstra minha dedicação à qualidade e inovação, apresentando uma gama diversificada de projetos que refletem minha jornada contínua de aprendizado e criação. Estou sempre ansioso para colaborar em projetos ambiciosos e expandir as fronteiras da tecnologia.",
        projectsTitle: "Projetos",
        filterAll: "Todos",
        filterButton: "Filtros",
        projectStatus: {
            "Em desenvolvimento": "Em desenvolvimento",
            "Concluído": "Concluído",
            "Disponível no jogo!": "Disponível no jogo!",
        },
        repoButton: "Repositório",
        liveUrl: {
            "Steam (Em Breve)": "Steam (Em Breve)",
            "Ver Repositórios": "View Repositories",
        },
        quotes: [
            { text: "A maior glória de viver não está em nunca cair, mas em nos levantarmos cada vez que caímos.", author: "Nelson Mandela" },
            { text: "A maneira de começar é parar de falar e começar a fazer.", author: "Walt Disney" },
            { text: "Seu tempo é limitado, então não perca-o vivendo a vida de outra pessoa.", author: "Steve Jobs" },
            { text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
            { text: "É durante nossos momentos mais sombrios que devemos nos concentrar para ver a luz.", author: "Aristóteles" },
            { text: "Não se esforce para ser um sucesso, mas sim para ser de valor.", author: "Albert Einstein" },
            { text: "Eu não falhei. Apenas encontrei 10.000 maneiras que não funcionam.", author: "Thomas A. Edison" },
            { text: "A única jornada impossível é aquela que você nunca começa.", author: "Tony Robbins" },
            { text: "Seja a mudança que você deseja ver no mundo.", author: "Mahatma Gandhi" },
            { text: "A vida é 10% o que nos acontece e 90% como reagimos a isso.", author: "Charles R. Swindoll" },
            { text: "A mente é tudo. O que você pensa, você se torna.", author: "Buda" },
            { text: "Uma vida não examinada não vale a pena ser vivida.", author: "Sócrates" },
        ],
        projects: [
            { title: "Outcaster", description: "Liderei o desenvolvimento de um FPS 'Boomer Shooter' de alta octanagem na Unity, com foco em mecânicas de ritmo acelerado e estética retrô. O projeto está definido para lançamento comercial na Steam." },
            { title: "Sparky Rush - QA", description: "Contribuí como Analista de Garantia de Qualidade para um jogo de plataforma de terror psicológico estilo PS1, identificando e documentando bugs críticos para melhorar a estabilidade do jogo e a experiência do jogador." },
            { title: "Cadeirante Simulator", description: "Um jogo experimental em Unity que explora a física ragdoll complexa e mecânicas de clonagem para uma experiência de controle única e desafiadora." },
            { title: "Project E", description: "Jogo de tiro em primeira pessoa com estilo retrô, inspirado em Doom, ambientado na lua Europa. Desenvolvido com a engine GZDoom, utilizando assets próprios." },
            { title: "Doom WAD Traduzido - PT-BR", description: "Tradução gráfica do WAD original do Doom para o português brasileiro. Todas as telas, menus e HUDs foram adaptadas mantendo a estética clássica." },
            { title: "FF13 Tradução PT-BR (MS Store)", description: "Mod que aplica tradução parcial em Final Fantasy XIII da Microsoft Store. Utiliza scripts de extração e recompilação de arquivos do jogo." },
            { title: "Otimizador WIN10/11", description: "App com GUI para aplicar otimizações não-invasivas no Windows visando performance e limpeza do sistema." },
            { title: "Organizador de GDDs", description: "Aplicativo desktop para organizar Game Design Documents (GDDs) e arquivos relacionados, com interface visual de abas e sistema de cards." },
            { title: "Xbox Gamelist Extractor", description: "Aplicação para extrair a lista de jogos de um perfil Xbox, gerando um arquivo de texto com todos os jogos do usuário." },
            { title: "Conversor TEXTMAP p/ OBJ", description: "Ferramenta de linha de comando que converte mapas do Doom (formato UDMF) em modelos 3D .OBJ, preservando com precisão a geometria e as texturas." },
            { title: "FF13Fix para MS Store", description: "Script projetado para resolver problemas de travamento e compatibilidade na versão da MS Store de Final Fantasy XIII, melhorando a experiência do jogador." },
            { title: "PYGopher", description: "Adaptação em Python do Gopher360, permitindo controle do mouse com joystick para setups personalizados e acessibilidade." },
            { title: "Game Quiz Acadêmico (GamificFCL)", description: "Projeto em python para aplicar gamificação em treinamentos corporativos no formato de quiz interativo em terminal. Projeto de extensão universitária." },
            { title: "Calculadora", description: "Comparação entre uma calculadora em C e uma em python, para práticas básicas e estudo de linguagens." },
            { title: "DIO Labs (Projetos Acadêmicos)", description: "Conjunto de projetos realizados nos desafios técnicos da DIO, envolvendo .NET, C, JavaScript e lógica de programação. Projetos: Classes, Nível de Herói, Calculadora de Partidas Rankeadas." },
            { title: "Portfólio Pessoal", description: "Este próprio portfólio. Um site moderno e interativo construído com React, TypeScript e CSS para apresentar meus projetos e habilidades de forma dinâmica e responsiva." },
        ]
    },
    en: {
        available: "Available for new projects",
        title: "Eduardo Gelain",
        subtitle: "Software Developer & Game Developer",
        resume: "Resume",
        aboutTitle: "About Me",
        aboutText: "As a <strong>Computer Engineering</strong> student with a deep-seated passion for both software and game development, I thrive on transforming complex challenges into elegant, high-performance solutions. My expertise spans from crafting immersive gameplay experiences in <strong>Unity and C#</strong> to engineering efficient system automation tools in <strong>Python</strong>. This portfolio showcases my dedication to quality and innovation, featuring a diverse range of projects that reflect my continuous journey of learning and creation. I am always eager to collaborate on ambitious projects and push the boundaries of technology.",
        projectsTitle: "Projects",
        filterAll: "All",
        filterButton: "Filters",
        projectStatus: {
            "Em desenvolvimento": "In development",
            "Concluído": "Completed",
            "Disponível no jogo!": "Available in-game!",
        },
        repoButton: "Repository",
        liveUrl: {
            "Steam (Em Breve)": "Steam (Coming Soon)",
            "Ver Repositórios": "View Repositories",
        },
        quotes: [
            { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
            { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
            { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
            { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
            { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
            { text: "The mind is everything. What you think you become.", author: "Buddha" },
            { text: "An unexamined life is not worth living.", author: "Socrates" },
        ],
        projects: [
            { title: "Outcaster", description: "Lead development of a high-octane 'Boomer Shooter' FPS in Unity, focusing on fast-paced mechanics and retro aesthetics. Project is set for commercial release on Steam." },
            { title: "Sparky Rush - QA", description: "Contributed as a Quality Assurance Analyst for a PS1-style psychological horror platformer, identifying and documenting critical bugs to improve game stability and player experience." },
            { title: "Wheelchair Simulator", description: "An experimental Unity game exploring complex ragdoll physics and cloning mechanics for a unique and challenging control scheme." },
            { title: "Project E", description: "A retro-style first-person shooter inspired by Doom, set on the moon Europa. Developed with the GZDoom engine, using custom assets." },
            { title: "Doom WAD Translated - PT-BR", description: "A graphical translation of the original Doom WAD to Brazilian Portuguese. All screens, menus, and HUDs were adapted while preserving the classic aesthetic." },
            { title: "FF13 PT-BR Translation (MS Store)", description: "Mod that applies a partial translation to Final Fantasy XIII from the Microsoft Store. It uses scripts to extract and recompile game files." },
            { title: "WIN10/11 Optimizer", description: "GUI app to apply non-invasive optimizations on Windows for performance and system cleanup." },
            { title: "GDD Organizer", description: "A desktop application to organize Game Design Documents (GDDs) and related files, with a visual interface of tabs and a card system." },
            { title: "Xbox Gamelist Extractor", description: "An application to extract the game list from an Xbox profile, generating a text file with all of the user's games." },
            { title: "TEXTMAP to OBJ Converter", description: "A command-line tool that accurately converts Doom maps (UDMF format) into 3D .OBJ models, faithfully preserving geometry and textures." },
            { title: "FF13Fix for MS Store", description: "Engineered a script to resolve critical crashing and compatibility issues in the MS Store version of Final Fantasy XIII, improving the player experience." },
            { title: "PYGopher", description: "A Python adaptation of Gopher360, allowing mouse control with a joystick for custom setups and accessibility." },
            { title: "Academic Game Quiz (GamificFCL)", description: "A Python project to apply gamification to corporate training in the format of an interactive terminal-based quiz. A university extension project." },
            { title: "Calculator", description: "A comparison between a C calculator and a Python one, for basic practice and language study." },
            { title: "DIO Labs (Academic Projects)", description: "A collection of projects from DIO's technical challenges, involving .NET, C, JavaScript, and programming logic. Projects: Classes, Hero Level, Ranked Match Calculator." },
            { title: "Personal Portfolio", description: "This portfolio itself. A modern and interactive website built with React, TypeScript, and CSS to showcase my projects and skills in a dynamic and responsive way." },
        ]
    }
};

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, options?: any) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [language, setLanguage] = useState('pt');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};


// --- TYPE DEFINITIONS ---
interface Project {
  image?: string;
  noImage?: boolean;
  icon?: string;
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  repoUrl: string;
  liveUrl?: string;
  liveUrlText?: string;
}

// --- PROJECT DATA ---
const projects: Project[] = [
    // Games
    {
        image: "/assets/Outcaster1.jpg",
        title: "Outcaster",
        description: "Liderei o desenvolvimento de um FPS 'Boomer Shooter' de alta octanagem na Unity, com foco em mecânicas de ritmo acelerado e estética retrô. O projeto está definido para lançamento comercial na Steam.",
        technologies: ["Unity", "C#", "Game"],
        status: "Em desenvolvimento",
        repoUrl: "https://github.com/Spet001/Outcaster",
    },
    {
        image: "/assets/sparky1.jpg",
        title: "Sparky Rush - QA",
        description: "Contribuí como Analista de Garantia de Qualidade para um jogo de plataforma de terror psicológico estilo PS1, identificando e documentando bugs críticos para melhorar a estabilidade do jogo e a experiência do jogador.",
        technologies: ["Unity", "Unity Debug QA", "C#"],
        status: "Em desenvolvimento",
        repoUrl: "#",
        liveUrl: "#",
        liveUrlText: "Steam (Em Breve)",
    },
    {
        image: "/assets/cadeirante-simulator.gif",
        title: "Cadeirante Simulator",
        description: "Um jogo experimental em Unity que explora a física ragdoll complexa e mecânicas de clonagem para uma experiência de controle única e desafiadora.",
        technologies: ["Unity", "C#", "Game"],
        status: "Em desenvolvimento",
        repoUrl: "https://github.com/Spet001/Cadeirante-Simulator--The-Game",
    },
    {
        image: "/assets/e.png",
        title: "Project E",
        description: "Jogo de tiro em primeira pessoa com estilo retrô, inspirado em Doom, ambientado na lua Europa. Desenvolvido com a engine GZDoom, utilizando assets próprios.",
        technologies: ["GZDoom", "SLADE", "Ultimate Doom Builder", "Doom Language C"],
        status: "Em desenvolvimento",
        repoUrl: "https://github.com/Spet001/ProjectE",
    },
    // Game Mods & Tools
    {
        image: "/assets/demotranslate.gif",
        title: "Doom WAD Traduzido - PT-BR",
        description: "Tradução gráfica do WAD original do Doom para o português brasileiro. Todas as telas, menus e HUDs foram adaptadas mantendo a estética clássica.",
        technologies: ["SLADE", "Graphics", "Doom Language (C)"],
        status: "Disponível no jogo!",
        repoUrl: "https://github.com/Spet001/Doom-WAD-Traduzido-PTBR",
    },
    {
        image: "/assets/ff13-traducao.png",
        title: "FF13 Tradução PT-BR (MS Store)",
        description: "Mod que aplica tradução parcial em Final Fantasy XIII da Microsoft Store. Utiliza scripts de extração e recompilação de arquivos do jogo.",
        technologies: ["PowerShell", "WhiteBinTools"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/FF13--PTBR-MS-Store",
    },
    {
        image: "/assets/otimizador.png",
        title: "Otimizador WIN10/11",
        description: "App com GUI para aplicar otimizações não-invasivas no Windows visando performance e limpeza do sistema.",
        technologies: ["Python", "Tkinter", "PowerShell"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/Otimizador-WIN10-11",
    },
    {
        image: "/assets/GDDorganizer.png",
        title: "Organizador de GDDs",
        description: "Aplicativo desktop para organizar Game Design Documents (GDDs) e arquivos relacionados, com interface visual de abas e sistema de cards.",
        technologies: ["Python", "Tkinter"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/GDD-Organizer",
    },
    {
        image: "/assets/extrator.png",
        title: "Xbox Gamelist Extractor",
        description: "Aplicação para extrair a lista de jogos de um perfil Xbox, gerando um arquivo de texto com todos os jogos do usuário.",
        technologies: ["Python", "Scraping", "Selenium", "Tkinter"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/Xbox-Gamelist-Extractor",
    },
    {
        image: "/assets/texttomap.png",
        title: "Conversor TEXTMAP p/ OBJ",
        description: "Ferramenta de linha de comando que converte mapas do Doom (formato UDMF) em modelos 3D .OBJ, preservando com precisão a geometria e as texturas.",
        technologies: ["Python", "Tool"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/TEXTMAP-to-Unity-Object",
    },
    {
        image: "/assets/ff13msdemo.png",
        title: "FF13Fix para MS Store",
        description: "Script para corrigir problemas na versão do FF13 da Xbox/MS Store, como travamentos e incompatibilidades.",
        technologies: ["PowerShell", "Batch", "Tool"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/FF13-MS-Store",
    },
    // Academic & Personal
    {
        image: "/assets/pygopher.png",
        
        title: "PYGopher",
        description: "Adaptação em Python do Gopher360, permitindo controle do mouse com joystick para setups personalizados e acessibilidade.",
        technologies: ["Python", "Tkinter", "Pygame"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/PyGopher",
    },
    {
        image: "/assets/FSL1.png",
        
        title: "Game Quiz Acadêmico (GamificFCL)",
        description: "Projeto em python para aplicar gamificação em treinamentos corporativos no formato de quiz interativo em terminal. Projeto de extensão universitária.",
        technologies: ["Python", "Tkinter"],
        status: "Concluido",
        repoUrl: "https://github.com/Spet001/GamificFCL",
    },
    {
        image: "/assets/calculadora.png",
        
        title: "Calculadora",
        description: "Comparação entre uma calculadora em C e uma em python, para práticas básicas e estudo de linguagens.",
        technologies: ["Python", "Tkinter", "C"],
        status: "Concluído",
        repoUrl: "https://github.com/Spet001/Calculadora-Simples-Python-e-C",
    },
    {
        image: "/assets/DIO.png",
        title: "DIO Labs (Projetos Acadêmicos)",
        description: "Conjunto de projetos realizados nos desafios técnicos da DIO, envolvendo .NET, C, JavaScript e lógica de programação. Projetos: Classes, Nível de Herói, Calculadora de Partidas Rankeadas.",
        technologies: ["JavaScript", "C", "Python"],
        repoUrl: "https://github.com/Spet001?tab=repositories",
        
    },
    {
        noImage: true,
        icon: "fas fa-briefcase",
        title: "Portfólio Pessoal",
        description: "Este portfólio. Um site moderno e interativo construído com React, TypeScript e CSS para apresentar meus projetos e habilidades.",
        technologies: ["React", "TypeScript", "CSS", "HTML"],
        status: "Em desenvolvimento",
        repoUrl: "https://github.com/Spet001/Spet001.github.io",
    },
];


// --- CUSTOM HOOK FOR FADE-IN ANIMATION ---
const useFadeIn = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

// --- COMPONENTS ---

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: any[] = [];
        const numStars = 500;
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mousePos.current = { x: canvas.width / 2, y: canvas.height / 2 };
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                });
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            mousePos.current = { x: event.clientX, y: event.clientY };
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                const perspective = canvas.width / star.z;
                const x = (star.x - canvas.width / 2) * perspective + canvas.width / 2;
                const y = (star.y - canvas.height / 2) * perspective + canvas.height / 2;
                const mouseX_factor = (star.x - mousePos.current.x) * 0.0001;
                const mouseY_factor = (star.y - mousePos.current.y) * 0.0001;

                star.z -= 0.2;
                star.x += mouseX_factor;
                star.y += mouseY_factor;

                if (star.z <= 0) {
                    star.z = canvas.width;
                }
                
                ctx.beginPath();
                ctx.arc(x, y, star.size * perspective * 0.5, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="starfield-canvas"></canvas>;
};

const AnimatedDiv: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    return (
        <div ref={ref} className={`${className || ''} fade-in ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    return (
        <div className="language-switcher">
            <button onClick={() => setLanguage('pt')} className={language === 'pt' ? 'active' : ''} aria-label="Mudar para Português">PT</button>
            <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''} aria-label="Switch to English">EN</button>
        </div>
    );
}

const SpetGamesLogo = () => (
    <svg className="spet-games-logo" viewBox="0 0 90 80" aria-hidden="true">
        <g>
            <path d="M75,20 L40,20 C30,20 20,30 20,40 L20,50 C20,60 30,70 40,70 L60,70" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M60,70 C70,70 80,60 80,50 L80,45" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round"/>
        </g>
    </svg>
);

const HeaderQuote = () => {
    const { t } = useLanguage();
    const [quote, setQuote] = useState<string | null>(null);

    useEffect(() => {
        const quotes = t('quotes');
        if (quotes && quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex].text);
        }
    }, [t]);

    if (!quote) return null;

    return <p className="header-quote">"{quote}"</p>;
};


const Header = () => {
    const { t, language } = useLanguage();
    const resumeUrl = language === 'en' ? '/assets/Translated_CV_Eduardo.docx' : '/assets/curriculo.pdf';
    return (
        <header className="hero">
            <AnimatedDiv className="container">
                <div className="status">
                    <span className="status-dot"></span>
                    {t('available')}
                </div>
                <h1>
                    <SpetGamesLogo />
                    {t('title')}
                </h1>
                <p className="subtitle">{t('subtitle')}</p>
                <div className="contact-links">
                    <div className="contact-links-left">
                        <LanguageSwitcher />
                        <div className="divider"></div>
                        <a href="mailto:gelain15mj@gmail.com" aria-label="E-mail"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/Spet001" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/eduardo-gelain-2407aa346/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="contact-links-right">
                        <HeaderQuote />
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-resume">{t('resume')}</a>
                    </div>
                </div>
            </AnimatedDiv>
        </header>
    )
};

const About = () => {
    const { t } = useLanguage();
    return (
        <section className="about">
            <AnimatedDiv className="container">
                <h2>{t('aboutTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('aboutText') }} />
            </AnimatedDiv>
        </section>
    )
};

const ProjectCard: React.FC<Project & { projectIndex: number }> = ({ projectIndex, ...originalProject }) => {
    const { t } = useLanguage();
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    const [imgError, setImgError] = useState(false);

    const handleImageError = () => {
        setImgError(true);
    };

    const hasLiveLink = originalProject.liveUrl && originalProject.liveUrl !== "#";
    const hasRepoLink = originalProject.repoUrl && originalProject.repoUrl !== "#";
    
    const translatedProject = t('projects')[projectIndex];

    const projectTitle = translatedProject?.title || originalProject.title;
    const projectDescription = translatedProject?.description || originalProject.description;
    
    const hasImage = originalProject.image && !imgError;
    const showPlaceholder = !hasImage && !originalProject.image;


    return (
        <div ref={ref} className={`project-card fade-in ${isVisible ? 'visible' : ''}`}>
            <a href={hasRepoLink ? originalProject.repoUrl : '#'} target="_blank" rel="noopener noreferrer" className="card-image-link">
                {hasImage ? (
                    <img src={originalProject.image} alt={projectTitle} onError={handleImageError} />
                ) : (
                    <div className="project-card-no-image">
                         <i className={originalProject.icon || "fas fa-code"}></i>
                    </div>
                )}
            </a>
            <div className="card-content">
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                 <div className="tech-tags">
                    {originalProject.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}
                </div>
                <div className="card-footer">
                    {hasRepoLink && <a href={originalProject.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{t('repoButton')}</a>}
                    {originalProject.liveUrlText && <a href={originalProject.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className={`btn-primary ${!hasLiveLink ? 'disabled' : ''}`}>{t('liveUrl')[originalProject.liveUrlText] || originalProject.liveUrlText}</a>}
                </div>
            </div>
        </div>
    );
};

const techIconMap: { [key: string]: string } = {
    'Unity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'PowerShell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    'Pygame': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pygame/pygame-original.svg',
    'Game': 'fas fa-gamepad',
    'Tool': 'fas fa-tools',
    'QA': 'fas fa-bug',
    'Game Mod': 'fas fa-puzzle-piece',
    'CLI': 'fas fa-terminal',
    'Education': 'fas fa-book',
    'GZDoom': 'fas fa-ghost',
    'SLADE': 'fas fa-palette',
    'Tkinter': 'fab fa-python',
};


const Projects = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('All');
    const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
    const filterDropdownRef = useRef<HTMLDivElement>(null);

    const allTechs = [...Array.from(new Set(projects.flatMap(p => p.technologies)))];
    
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.technologies.includes(activeFilter));

    const handleFilterClick = (tech: string) => {
        setActiveFilter(tech);
        setFilterMenuOpen(false);
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
                setFilterMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className="projects">
            <div className="container">
                <AnimatedDiv>
                    <h2>{t('projectsTitle')}</h2>
                </AnimatedDiv>
                <AnimatedDiv className="filter-wrapper">
                    <button 
                        onClick={() => handleFilterClick('All')}
                        className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                    >
                        {t('filterAll')}
                    </button>
                     <div className={`filter-dropdown ${isFilterMenuOpen ? 'open' : ''}`} ref={filterDropdownRef}>
                        <button 
                            onClick={() => setFilterMenuOpen(!isFilterMenuOpen)}
                            className="filter-btn filter-trigger"
                            aria-haspopup="true"
                            aria-expanded={isFilterMenuOpen}
                        >
                            {t('filterButton')} <i className="fas fa-chevron-down"></i>
                        </button>
                        {isFilterMenuOpen && (
                             <div className="filter-options">
                                {allTechs.sort().map(tech => (
                                    <button 
                                        key={tech} 
                                        onClick={() => handleFilterClick(tech)} 
                                        className={`filter-icon-btn ${activeFilter === tech ? 'active' : ''}`}
                                        title={tech}
                                    >
                                        {techIconMap[tech]?.startsWith('fas') || techIconMap[tech]?.startsWith('fab') ? (
                                            <i className={techIconMap[tech]}></i>
                                        ) : techIconMap[tech] ? (
                                            <img src={techIconMap[tech]} alt={`${tech} logo`} />
                                        ) : (
                                            <span>{tech}</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </AnimatedDiv>
                <div className="project-grid">
                    {filteredProjects.map((project, index) => {
                        const originalIndex = projects.findIndex(p => p.title === project.title);
                        return <ProjectCard key={project.title + index} {...project} projectIndex={originalIndex} />
                    })}
                </div>
            </div>
        </section>
    );
}

const FooterQuote = () => {
    const { t } = useLanguage();
    const [quote, setQuote] = useState<{text: string, author: string} | null>(null);

    useEffect(() => {
        const quotes = t('quotes');
        if (quotes && quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        }
    }, [t]);

    if (!quote) return null;

    return (
        <div className="footer-quote">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">&mdash; {quote.author}</p>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <AnimatedDiv className="container">
                <FooterQuote />
                <div className="contact-links">
                    <a href="mailto:gelain15mj@gmail.com">gelain15mj@gmail.com</a>
                    <span>&bull;</span>
                    <a href="https://github.com/Spet001" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span>&bull;</span>
                    <a href="https://www.linkedin.com/in/eduardo-gelain-2407aa346/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </AnimatedDiv>
        </footer>
    );
};

const App = () => (
    <LanguageProvider>
        <Starfield />
        <div className="app">
            <Header />
            <main>
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    </LanguageProvider>
);

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}