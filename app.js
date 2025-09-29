const { useState, useEffect, useRef, createContext, useContext } = React;

// --- DADOS DOS PROJETOS (COM TRADUÇÃO) ---
const allProjects = [
    // Projetos Relevantes
    {
        id: 'sparky',
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257185670/d0cf56f005af6f109edd9ee603dc2da75fa0aaf1/movie_232x130.jpg?t=1756993430",
        technologies: ["QA", "Unity", "C#"],
        liveUrl: "https://store.steampowered.com/app/3592020/Sparky_Rush_Purrils_in_Pawsville/?curator_clanid=4777282",
        liveUrlTextKey: "steamWishlist",
        category: 'relevant',
        pt: {
            title: "QA Analyst - Sparky Rush",
            description: "Como QA Analyst para o jogo 'Sparky Rush', fui responsável por identificar e documentar mais de 50 bugs, garantindo a qualidade e estabilidade do produto para seu lançamento na Steam."
        },
        en: {
            title: "QA Analyst - Sparky Rush",
            description: "As QA Analyst for the game 'Sparky Rush', I was responsible for identifying and documenting over 50 bugs, ensuring the product's quality and stability for its Steam release."
        }
    },
    {
        id: 'outcaster',
        image: "assets/Outcaster1.jpg",
        technologies: ["Unity", "C#"],
        repoUrl: "https://github.com/Spet001/Outcaster",
        category: 'relevant',
        pt: {
            title: "Outcaster - Jogo Autoral, em desenvolvimento",
            description: "Lidero o desenvolvimento de um FPS de alta octanagem no estilo 'boomer shooter' em uma equipe de 15 pessoas. O projeto está em desenvolvimento, com foco em mecânicas de ritmo acelerado e estética retrô."
        },
        en: {
            title: "Outcaster - Original Game, in development",
            description: "I lead the development of a high-octane 'boomer shooter' style FPS with a team of 15 people. The project is in development, focusing on fast-paced mechanics and a retro aesthetic."
        }
    },
    {
        id: 'ff13fix',
        image: "https://staticdelivery.nexusmods.com/mods/2086/images/thumbnails/59/59-1754939857-517189306.png",
        technologies: ["Python", "C#", "ILspy", "Reverse Engineering"],
        repoUrl: "https://github.com/Spet001/FF13-MS-Store",
        liveUrl: "https://www.nexusmods.com/finalfantasy13/mods/59",
        liveUrlTextKey: "nexus",
        category: 'relevant',
        pt: {
            title: "FF13Fix UWP",
            description: "Realizei um fork do FF13Fix e o refatorei para ser compatível com a versão da Microsoft Store, permitindo a injeção de DLLs e o carregamento de mods em jogos UWP, contornando as proteções da plataforma."
        },
        en: {
            title: "FF13Fix UWP",
            description: "I forked FF13Fix and refactored it to be compatible with the Microsoft Store version, allowing DLL injection and mod loading in UWP games, bypassing the platform's protections."
        }
    },
    {
        id: 'autoparms',
        image: "https://staticdelivery.nexusmods.com/mods/7333/images/thumbnails/181/181-1754787442-12213008.png",
        technologies: ["Python", "Reverse Engineering"],
        liveUrl: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/181",
        liveUrlTextKey: "nexus",
        category: 'relevant',
        pt: {
            title: "AutoParMS",
            description: "Desenvolvi uma ferramenta que força a instalação de mods na versão UWP de 'Like a Dragon', injetando-os no jogo apesar das restrições da plataforma, permitindo customização pela comunidade."
        },
        en: {
            title: "AutoParMS",
            description: "I developed a tool that forces the installation of mods on the UWP version of 'Like a Dragon', injecting them into the game despite platform restrictions, allowing for community customization."
        }
    },
    {
        id: 'ladfixms',
        image: "https://staticdelivery.nexusmods.com/mods/7333/images/thumbnails/187/187-1757613976-1077513334.png",
        technologies: ["Python", "Reverse Engineering"],
        liveUrl: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/187#",
        liveUrlTextKey: "nexus",
        category: 'relevant',
        pt: {
            title: "LADFixMS",
            description: "Desenvolvi uma ferramenta que força carregamento de DLLs na versão UWP de 'Like a Dragon Pirate Yakuza', injetando-os no jogo apesar das restrições da plataforma, permitindo customização pela comunidade."
        },
        en: {
            title: "LADFixMS",
            description: "I developed a tool that forces DLL loading on the UWP version of 'Like a Dragon Pirate Yakuza', injecting them into the game despite platform restrictions, enabling community customization."
        }
    },
    // Projetos Menores
    {
        id: 'qos_injector',
        image: "https://staticdelivery.nexusmods.com/mods/6689/images/thumbnails/77/77-1757967325-194898673.png",
        technologies: ["Python", "ILspy"],
        liveUrl: "https://www.nexusmods.com/007quantumofsolace/mods/77",
        liveUrlTextKey: "nexus",
        category: 'minor',
        pt: {
            title: "Quantum of Solace - Vulkan/DXVK Injector",
            description: "Criei um script em Python para injeção de DLLs em '007 Quantum of Solace', permitindo a utilização de APIs gráficas como Vulkan via DXVK para melhor performance e compatibilidade."
        },
        en: {
            title: "Quantum of Solace - Vulkan/DXVK Injector",
            description: "Created a Python script for DLL injection in '007 Quantum of Solace', enabling the use of graphics APIs like Vulkan via DXVK for better performance and compatibility."
        }
    },
    {
        id: 'better_xcloud',
        image: "data:image/jpeg;base64,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",
        technologies: ["JavaScript", "Otimização"],
        repoUrl: "https://github.com/Spet001/better-xcloud-optimized",
        category: 'minor',
        pt: {
            title: "Better XCloud Optimized",
            description: "Fork do projeto 'better-xcloud' onde otimizei e refatorei o código JavaScript para melhorar a nitidez da imagem e a performance geral do serviço de cloud gaming."
        },
        en: {
            title: "Better XCloud Optimized",
            description: "Fork of the 'better-xcloud' project where I optimized and refactored the JavaScript code to improve image sharpness and overall performance of the cloud gaming service."
        }
    },
    {
        id: 'ff13_injector',
        image: "./assets/ff13-traducao.png",
        technologies: ["Powershell"],
        repoUrl: "https://github.com/Spet001/FF13--PTBR-MS-Store",
        category: 'minor',
        pt: {
            title: "FF13 Injector",
            description: "Injetor em powershell de arquivos de mods direto na imagem do jogo."
        },
        en: {
            title: "FF13 Injector",
            description: "A PowerShell injector for mod files directly into the game's image."
        }
    },
    {
        id: 'gzdoom_uwp',
        image: "https://cdn2.steamgriddb.com/logo_thumb/4e680e460ccee706272f2e7ddc974adb.png",
        technologies: ["C", "XboxDevMode"],
        repoUrl: "https://github.com/Spet001/gzdoom_test",
        category: 'minor',
        pt: {
            title: "GZDoom para UWP/Xbox DevKits - WIP",
            description: "Realizei um fork do GZDoom com modificações em C para habilitar seu funcionamento em ambientes UWP, com foco em devkits de Xbox, explorando a portabilidade da engine."
        },
        en: {
            title: "GZDoom for UWP/Xbox DevKits - WIP",
            description: "Forked GZDoom with C modifications to enable it to run in UWP environments, focusing on Xbox devkits, exploring the engine's portability."
        }
    },
    {
        id: 'gamelist_extractor',
        image: "https://icons.veryicon.com/png/o/miscellaneous/effevo/game-49.png",
        technologies: ["Python", "Selenium", "Tkinter"],
        repoUrl: "https://github.com/Spet001/Xbox-Gamelist-Extractor",
        category: 'minor',
        pt: {
            title: "Xbox Gamelist Extractor",
            description: "Aplicação com interface gráfica que utiliza web scraping com Selenium para extrair e salvar a lista completa de jogos de perfis do Xbox a partir do site Gamertag Nation."
        },
        en: {
            title: "Xbox Gamelist Extractor",
            description: "GUI application that uses web scraping with Selenium to extract and save the complete game list from Xbox profiles on the Gamertag Nation website."
        }
    },
    {
        id: 'cadeirante_sim',
        image: "assets/cadeirante-simulator.gif",
        technologies: ["Unity", "C#"],
        repoUrl: "https://github.com/Spet001/Cadeirante-Simulator--The-Game",
        category: 'minor',
        pt: {
            title: "Cadeirante Simulator - WIP",
            description: "Jogo de comédia onde o jogador é 'punido' com físicas de ragdoll exageradas, explorando os limites da engine Unity para criar momentos inesperados e engraçados."
        },
        en: {
            title: "Wheelchair Simulator - WIP",
            description: "A comedy game where the player is 'punished' with exaggerated ragdoll physics, exploring the limits of the Unity engine to create unexpected and funny moments."
        }
    },
    {
        id: 'pygopher',
        image: "https://marketplace.canva.com/FEYrM/MAGCfbFEYrM/1/tl/canva-neon-esports-gaming-joystick-icon-MAGCfbFEYrM.png",
        technologies: ["Python", "Tkinter", "Pygame"],
        repoUrl: "https://github.com/Spet001/PYGopher",
        category: 'minor',
        pt: {
            title: "PYGopher - Joystick Mouse Control",
            description: "Fork do Gopher360, modernizado e reescrito em Python, que permite o controle total do mouse através de um joystick para maior acessibilidade e setups personalizados."
        },
        en: {
            title: "PYGopher - Joystick Mouse Control",
            description: "Fork of Gopher360, modernized and rewritten in Python, allowing full mouse control via a joystick for greater accessibility and custom setups."
        }
    },
    {
        id: 'textmap_converter',
        image: "https://aitap.github.io/2024/01/01/incomplete_sectors.png",
        technologies: ["Python", "Tool"],
        repoUrl: "https://github.com/Spet001/TEXTMAP-to-Unity-Object",
        category: 'minor',
        pt: {
            title: "Conversor TEXTMAP para OBJ",
            description: "Ferramenta de linha de comando que converte mapas de Doom (formato UDMF) em modelos 3D no formato .OBJ, preservando a geometria e as texturas para uso em outras engines."
        },
        en: {
            title: "TEXTMAP to OBJ Converter",
            description: "Command-line tool that converts Doom maps (UDMF format) into 3D models in .OBJ format, preserving geometry and textures for use in other engines."
        }
    },
    {
        id: 'doom_wad_ptbr',
        image: "/assets/demotranslate.gif",
        technologies: ["SLADE", "Graphics", "Doom Language (C)"],
        repoUrl: "https://github.com/Spet001/Doom-WAD-Traduzido-PTBR",
        category: 'minor',
        pt: {
            title: "Doom WAD Traduzido - PT-BR",
            description: "Tradução gráfica do WAD original do Doom para o português brasileiro. Todas as telas, menus e HUDs foram adaptadas mantendo a estética clássica."
        },
        en: {
            title: "Doom WAD Translated - PT-BR",
            description: "Graphic translation of the original Doom WAD to Brazilian Portuguese. All screens, menus, and HUDs were adapted while maintaining the classic aesthetic."
        }
    },
    {
        id: 'boiii_uwp',
        image: "https://store-images.s-microsoft.com/image/apps.24461.66777443557046310.abf0f423-a960-4f91-982f-7c0e898cf325.6577cc39-16b4-4a2e-9981-368c1d0065cd?q=90&w=480&h=270",
        technologies: ["ILspy", "C++"],
        repoUrl: "https://github.com/Spet001/BOIII-ReImagined-UWP",
        category: 'minor',
        pt: {
            title: "BOIII UWP",
            description: "Custom client de Call of Duty Black Ops 3 para a versão UWP - WIP."
        },
        en: {
            title: "BOIII UWP",
            description: "Custom client for Call of Duty Black Ops 3 for the UWP version - WIP."
        }
    },
];

const insignificantProjects = [
    { 
        id: 'other_repos',
        repoUrl: "https://github.com/Spet001?tab=repositories",
        pt: {
            title: "Outros Projetos:",
            description: "Coleção de projetos desenvolvidos durante bootcamps, desafios de lógica e pequenas aplicações para estudo próprio. Sinta-se livre para ver todos os meus repos!"
        },
        en: {
            title: "Other Projects:",
            description: "A collection of projects developed during bootcamps, logic challenges, and small applications for self-study. Feel free to check out all my repositories!"
        }
    },
    { 
        id: 'itch_io',
        repoUrl: "#",
        pt: {
            title: "Itch.io:",
            description: "EM BREVE!"
        },
        en: {
            title: "Itch.io:",
            description: "COMING SOON!"
        }
    },
];

// --- LÓGICA DO PORTFÓLIO ---

const LanguageContext = createContext(undefined);

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt');
    const translations = {
        pt: {
            available: "Disponível para novos projetos",
            title: "Eduardo Gelain",
            subtitle: "Desenvolvedor de Software & Jogos",
            resume: "Currículo",
            aboutTitle: "Sobre Mim",
            aboutText: "Desenvolvedor de Software e Jogos com especialização em <strong>C#, Python e Unity</strong>. Minha paixão reside em transformar desafios complexos em soluções de alta performance, seja criando experiências de gameplay imersivas, desenvolvendo ferramentas de automação ou aplicando <strong>engenharia reversa</strong> para expandir as fronteiras de jogos existentes. Este portfólio é um reflexo da minha jornada de aprendizado contínuo, destacando projetos que demonstram minha dedicação à qualidade, inovação e minha busca incessante por expandir as fronteiras da tecnologia. Busco colaborar em projetos ambiciosos e continuar aprimorando minhas habilidades em tecnologia.",
            projectsTitle: "Projetos em Destaque",
            minorProjectsTitle: "Outros Projetos",
            insignificantProjectsTitle: "Estudos e Desafios",
            repoButton: "Repositório",
            liveUrlText: "Ver ao Vivo",
            steamWishlist: "Wishlist na Steam!",
            nexus: "Ver no Nexus Mods",
            interactiveNote: "O meu portfólio é dinâmico! Use as setas <span class='kbd-key'>&uarr;</span> <span class='kbd-key'>&larr;</span> <span class='kbd-key'>&darr;</span> <span class='kbd-key'>&rarr;</span> para controlar o background!",
        },
        en: {
            available: "Available for new projects",
            title: "Eduardo Gelain",
            subtitle: "Software & Game Developer",
            resume: "Resume",
            aboutTitle: "About Me",
            aboutText: "Software and Game Developer specializing in <strong>C#, Python, and Unity</strong>. My passion lies in transforming complex challenges into high-performance solutions, whether it's crafting immersive gameplay experiences, developing automation tools, or applying <strong>reverse engineering</strong> to expand the boundaries of existing games. This portfolio reflects my journey of continuous learning, showcasing projects that demonstrate my dedication to quality, innovation, and my relentless pursuit of pushing technological frontiers. I am seeking to collaborate on ambitious projects and continue to hone my skills in technology.",
            projectsTitle: "Featured Projects",
            minorProjectsTitle: "Other Projects",
            insignificantProjectsTitle: "Studies & Challenges",
            repoButton: "Repository",
            liveUrlText: "View Live",
            steamWishlist: "Wishlist on Steam!",
            nexus: "View on Nexus Mods",
            interactiveNote: "My portfolio is dynamic! Use the arrow keys <span class='kbd-key'>&uarr;</span> <span class='kbd-key'>&larr;</span> <span class='kbd-key'>&darr;</span> <span class='kbd-key'>&rarr;</span> to control the background!",
        }
    };
    const t = (key) => translations[language][key] || key;
    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

const Starfield = () => {
    const canvasRef = useRef(null);
    const moonPosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 3 });
    const keysPressed = useRef({});

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let stars = [];
        const numStars = 500;
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    size: Math.random() * 2 + 0.5
                });
            }
        };

        const drawMoon = (moonPos) => {
            // Glow
            const gradient = ctx.createRadialGradient(moonPos.x, moonPos.y, 40, moonPos.x, moonPos.y, 100);
            gradient.addColorStop(0, 'rgba(255, 255, 240, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 255, 240, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(moonPos.x - 100, moonPos.y - 100, 200, 200);

            // Moon body
            ctx.beginPath();
            ctx.arc(moonPos.x, moonPos.y, 40, 0, 2 * Math.PI);
            ctx.fillStyle = '#f0e6d2';
            ctx.fill();

            // Craters
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.beginPath();
            ctx.arc(moonPos.x + 15, moonPos.y - 10, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(moonPos.x - 20, moonPos.y + 5, 12, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(moonPos.x, moonPos.y + 20, 5, 0, 2 * Math.PI);
            ctx.fill();
        };

        const handleKeyDown = (e) => { keysPressed.current[e.key] = true; };
        const handleKeyUp = (e) => { delete keysPressed.current[e.key]; };
        
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const updateMoonPosition = () => {
            const speed = 3;
            if (keysPressed.current['ArrowUp'] && moonPosRef.current.y > 0) moonPosRef.current.y -= speed;
            if (keysPressed.current['ArrowDown'] && moonPosRef.current.y < canvas.height) moonPosRef.current.y += speed;
            if (keysPressed.current['ArrowLeft'] && moonPosRef.current.x > 0) moonPosRef.current.x -= speed;
            if (keysPressed.current['ArrowRight'] && moonPosRef.current.x < canvas.width) moonPosRef.current.x += speed;
        };

        const render = () => {
            updateMoonPosition();
            ctx.fillStyle = 'rgba(10, 10, 10, 0.7)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            drawMoon(moonPosRef.current);

            ctx.fillStyle = 'white';
            stars.forEach(star => {
                star.z -= 0.2;
                if (star.z <= 0) star.z = canvas.width;
                const perspective = canvas.width / star.z;
                const x = (star.x - canvas.width / 2) * perspective + canvas.width / 2;
                const y = (star.y - canvas.height / 2) * perspective + canvas.height / 2;
                ctx.beginPath();
                ctx.arc(x, y, star.size * perspective * 0.5, 0, 2 * Math.PI);
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(render);
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="starfield-canvas"></canvas>;
};


const useFadeIn = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(ref.current);
            }
        }, options);
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [ref, options]);
    return [ref, isVisible];
};

const AnimatedDiv = ({ children, className }) => {
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    return <div ref={ref} className={`${className || ''} fade-in ${isVisible ? 'visible' : ''}`}>{children}</div>;
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

const Header = () => {
    const { t, language } = useLanguage();
    const resumeUrl = language === 'en' ? './assets/Translated_CV_EduardoGelain.docx' : './assets/curriculo.pdf';
    return (
        <header className="hero">
            <AnimatedDiv className="container">
                <div className="status"><span className="status-dot"></span>{t('available')}</div>
                <h1><SpetGamesLogo />{t('title')}</h1>
                <p className="subtitle">{t('subtitle')}</p>
                <div className="contact-links">
                    <div className="contact-links-left">
                        <LanguageSwitcher />
                        <div className="divider"></div>
                        <a href="mailto:gelain15mj@gmail.com" aria-label="E-mail"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/Spet001" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/eduardo-gelain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-resume">{t('resume')}</a>
                </div>
                 <p className="interactive-note" dangerouslySetInnerHTML={{ __html: t('interactiveNote') }} />
            </AnimatedDiv>
        </header>
    )
};

const TechIcons = () => {
    const techs = ['cs', 'python', 'unity', 'c', 'cpp', 'js', 'git', 'github', 'vscode', 'powershell', 'selenium' ];
    return (
        <div className="tech-icons">
            {techs.map(tech => (
                <img 
                    key={tech} 
                    src={`https://skillicons.dev/icons?i=${tech}&theme=dark`} 
                    alt={`${tech} icon`}
                    title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                />
            ))}
        </div>
    );
};

const About = () => {
    const { t } = useLanguage();
    return (
        <section className="about">
            <AnimatedDiv className="container">
                <h2>{t('aboutTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('aboutText') }} />
                <TechIcons />
            </AnimatedDiv>
        </section>
    )
};

const ProjectCard = ({ project }) => {
    const { t, language } = useLanguage();
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    const hasLiveLink = project.liveUrl && project.liveUrl !== "#";
    const hasRepoLink = project.repoUrl && project.repoUrl !== "#";

    const content = project[language] || project['pt'];

    return (
        <div ref={ref} className={`project-card fade-in ${isVisible ? 'visible' : ''}`}>
             <a href={hasRepoLink ? project.repoUrl : (hasLiveLink ? project.liveUrl : '#')} target="_blank" rel="noopener noreferrer" className="project-card__image-link">
                {project.image ? (
                    <img src={project.image} alt={content.title} />
                ) : (
                    <div className="project-card-no-image">
                         <i className={project.icon || "fas fa-tools"}></i>
                    </div>
                )}
            </a>
            <div className="card-content">
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                 <div className="tech-tags">{project.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}</div>
                <div className="card-footer">
                    {hasRepoLink && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{t('repoButton')}</a>}
                    {hasLiveLink && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">{t(project.liveUrlTextKey) || t('liveUrlText')}</a>}
                </div>
            </div>
        </div>
    );
};

const InsignificantProjectItem = ({ project }) => {
    const { language } = useLanguage();
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    const content = project[language] || project['pt'];
    const isDisabled = project.repoUrl === "#";

    return (
        <div ref={ref} className={`insignificant-project-item fade-in ${isVisible ? 'visible' : ''}`}>
            <div>
                <h4>{content.title}</h4>
                <p>{content.description}</p>
            </div>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${isDisabled ? 'disabled' : ''}`}>Repositório</a>
        </div>
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const relevant = allProjects.filter(p => p.category === 'relevant');
    const minor = allProjects.filter(p => p.category === 'minor');

    return (
        <React.Fragment>
            <section className="projects">
                <div className="container">
                    <AnimatedDiv><h2>{t('projectsTitle')}</h2></AnimatedDiv>
                    <div className="project-grid">{relevant.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
                </div>
            </section>
            <section className="projects">
                <div className="container">
                    <AnimatedDiv><h2>{t('minorProjectsTitle')}</h2></AnimatedDiv>
                    <div className="project-grid">{minor.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
                </div>
            </section>
            <section className="projects">
                <div className="container">
                    <AnimatedDiv><h2>{t('insignificantProjectsTitle')}</h2></AnimatedDiv>
                    <div className="insignificant-project-grid">{insignificantProjects.map((p) => <InsignificantProjectItem key={p.id} project={p} />)}</div>
                </div>
            </section>
        </React.Fragment>
    );
}

const Footer = () => (
    <footer className="footer">
        <AnimatedDiv className="container">
            <div className="contact-links">
                <a href="mailto:gelain15mj@gmail.com">gelain15mj@gmail.com</a>
                <span>&bull;</span>
                <a href="https://github.com/Spet001" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span>&bull;</span>
                <a href="https://www.linkedin.com/in/eduardo-gelain/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </AnimatedDiv>
    </footer>
);

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
const root = ReactDOM.createRoot(container);
root.render(<App />);
