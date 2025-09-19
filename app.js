const { useState, useEffect, useRef, createContext, useContext } = React;

// --- DADOS DOS PROJETOS 
const relevantProjects = [
    {
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257185670/d0cf56f005af6f109edd9ee603dc2da75fa0aaf1/movie_232x130.jpg?t=1756993430", // Substitua pela imagem da Steam
        title: "QA Analyst - Sparky Rush",
        description: "Como QA Analyst para o jogo 'Sparky Rush', fui responsável por identificar e documentar mais de 50 bugs, garantindo a qualidade e estabilidade do produto para seu lançamento na Steam.",
        technologies: ["QA", "Unity", "C#"],
        liveUrl: "https://store.steampowered.com/app/3592020/Sparky_Rush_Purrils_in_Pawsville/?curator_clanid=4777282",
        liveUrlText: "Wishlist na Steam!"
    },
    {
        image: "assets/Outcaster1.jpg",
        title: "Outcaster - Jogo Autoral, em desenvolvimento",
        description: "Lidero o desenvolvimento de um FPS de alta octanagem no estilo 'boomer shooter' em uma equipe de 15 pessoas. O projeto está em desenvolvimento, com foco em mecânicas de ritmo acelerado e estética retrô.",
        technologies: ["Unity", "C#"],
        repoUrl: "https://github.com/Spet001/Outcaster",
    },
    {
        image: "https://staticdelivery.nexusmods.com/mods/2086/images/thumbnails/59/59-1754939857-517189306.png",
        title: "FF13Fix UWP",
        description: "Realizei um fork do FF13Fix e o refatorei para ser compatível com a versão da Microsoft Store, permitindo a injeção de DLLs e o carregamento de mods em jogos UWP, contornando as proteções da plataforma.",
        technologies: ["Python", "C#", "ILspy", "Reverse Engineering"],
        repoUrl: "https://github.com/Spet001/FF13-MS-Store",
        liveUrl: "https://www.nexusmods.com/finalfantasy13/mods/59",
        liveUrlText: "Ver no Nexus Mods"
    },
    {
        image: "https://staticdelivery.nexusmods.com/mods/7333/images/thumbnails/181/181-1754787442-12213008.png", 
        title: "AutoParMS",
        description: "Desenvolvi uma ferramenta que força a instalação de mods na versão UWP de 'Like a Dragon', injetando-os no jogo apesar das restrições da plataforma, permitindo customização pela comunidade.",
        technologies: ["Python", "Reverse Engineering"],
        liveUrl: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/181",
        liveUrlText: "Ver no Nexus Mods"
    },
    {
        image: "https://staticdelivery.nexusmods.com/mods/7333/images/thumbnails/187/187-1757613976-1077513334.png", 
        title: "LADFixMS",
        description: "Desenvolvi uma ferramenta que força carregamento de DLLs na versão UWP de 'Like a Dragon Pirate Yakuza', injetando-os no jogo apesar das restrições da plataforma, permitindo customização pela comunidade.",
        technologies: ["Python", "Reverse Engineering"],
        liveUrl: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/187#",
        liveUrlText: "Ver no Nexus Mods"
    },
    

];

const minorProjects = [

     {
        image: "https://staticdelivery.nexusmods.com/mods/6689/images/thumbnails/77/77-1757967325-194898673.png", // Substitua pela imagem do Nexus Mods
        title: "Quantum of Solace - Vulkan/DXVK Injector",
        description: "Criei um script em Python para injeção de DLLs em '007 Quantum of Solace', permitindo a utilização de APIs gráficas como Vulkan via DXVK para melhor performance e compatibilidade.",
        technologies: [ "ILspy"],
        liveUrl: "https://www.nexusmods.com/007quantumofsolace/mods/77",
        liveUrlText: "Ver no Nexus Mods"
    },

    { 
        image: "data:image/jpeg;base64,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",
        title: "Better XCloud Optimized",
        description: "Fork do projeto 'better-xcloud' onde otimizei e refatorei o código JavaScript para melhorar a nitidez da imagem e a performance geral do serviço de cloud gaming.",
        technologies: ["JavaScript", "Otimização"],
        repoUrl: "https://github.com/Spet001/better-xcloud-optimized",
    },
    { 
       title: "FF13 Injector",
        image: "./assets/ff13-traducao.png",
        description: "Injetor em powershell de arquivos de mods direto na imagem do jogo",
        technologies: ["Powershell"],
        repoUrl: "https://github.com/Spet001/FF13--PTBR-MS-Store",
    },
    {
        image: "data:image/jpeg;base64,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",
        title: "GZDoom para UWP/Xbox DevKits - WIP",
        description: "Realizei um fork do GZDoom com modificações em C++ para habilitar seu funcionamento em ambientes UWP, com foco em devkits de Xbox, explorando a portabilidade da engine.",
        technologies: ["C++", "XboxDevMode"],
        repoUrl: "https://github.com/Spet001/gzdoom_test",
    },
    {
      
        image: "https://icons.veryicon.com/png/o/miscellaneous/effevo/game-49.png",
        title: "Xbox Gamelist Extractor",
        description: "Aplicação com interface gráfica que utiliza web scraping com Selenium para extrair e salvar a lista completa de jogos de perfis do Xbox a partir do site Gamertag Nation.",
        technologies: ["Python", "Selenium", "Tkinter"],
        repoUrl: "https://github.com/Spet001/Xbox-Gamelist-Extractor",
    },
    {
        image: "assets/cadeirante-simulator.gif",
        title: "Cadeirante Simulator - WIP",
        description: "Jogo de comédia onde o jogador é 'punido' com físicas de ragdoll exageradas, explorando os limites da engine Unity para criar momentos inesperados e engraçados.",
        technologies: ["Unity", "C#"],
        repoUrl: "https://github.com/Spet001/Cadeirante-Simulator--The-Game",
    },
    {
        image: "https://marketplace.canva.com/FEYrM/MAGCfbFEYrM/1/tl/canva-neon-esports-gaming-joystick-icon-MAGCfbFEYrM.png",
        title: "PYGopher - Joystick Mouse Control",
        description: "Fork do Gopher360, modernizado e reescrito em Python, que permite o controle total do mouse através de um joystick para maior acessibilidade e setups personalizados.",
        technologies: ["Python", "Tkinter", "Pygame"],
        repoUrl: "https://github.com/Spet001/PYGopher",
    },
    {
        image: "https://aitap.github.io/2024/01/01/incomplete_sectors.png",
        title: "Conversor TEXTMAP para OBJ",
        description: "Ferramenta de linha de comando que converte mapas de Doom (formato UDMF) em modelos 3D no formato .OBJ, preservando a geometria e as texturas para uso em outras engines.",
        technologies: ["Python", "Tool"],
        repoUrl: "https://github.com/Spet001/TEXTMAP-to-Unity-Object",
    },
        {
        image: "/assets/demotranslate.gif",
        title: "Doom WAD Traduzido - PT-BR",
        description: "Tradução gráfica do WAD original do Doom para o português brasileiro. Todas as telas, menus e HUDs foram adaptadas mantendo a estética clássica.",
        technologies: ["SLADE", "Graphics", "Doom Language (C)"],
        status: "Disponível no jogo!",
        repoUrl: "https://github.com/Spet001/Doom-WAD-Traduzido-PTBR",

    
    },

  {
        image: "https://store-images.s-microsoft.com/image/apps.24461.66777443557046310.abf0f423-a960-4f91-982f-7c0e898cf325.6577cc39-16b4-4a2e-9981-368c1d0065cd?q=90&w=480&h=270", 
        title: "BOIII UWP",
        description: "Custom client de Call of Duty Black Ops 3 para a versão UWP - WIP.",
        technologies: [ "ILspy","C++"],
        repoUrl: "https://github.com/Spet001/BOIII-ReImagined-UWP",
        
    },


];



     



const insignificantProjects = [
    { title: "Outros Projetos:", description: "Coleção de projetos desenvolvidos durante bootcamps, desafios de lógica e pequenas aplicações para estudo próprio. Sinta-se livre para ver todos os meus repos!", repoUrl: "https://github.com/Spet001?tab=repositories" },
  { title: "Itch.io:", description: "EM BREVE!", repoUrl: "https://TODO.placeholder.TODO." },
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
            filterAll: "Todos",
            filterButton: "Filtros",
            repoButton: "Repositório",
            liveUrlText: "Ver ao Vivo",
        },
        en: {
            available: "Available for new projects",
            title: "Eduardo Gelain",
            subtitle: "Software & Game Developer",
            resume: "Resume",
            aboutTitle: "About me - \nENGLISH VERSION WIP!",
            aboutText: "Software and Game Developer specializing in <strong>C#, Python, and Unity</strong>. My passion lies in transforming complex challenges into high-performance solutions, whether it's crafting immersive gameplay experiences, developing automation tools, or applying <strong>reverse engineering</strong> to expand the boundaries of existing games. This portfolio reflects my journey of continuous learning, showcasing projects that demonstrate my dedication to quality, innovation, and my relentless pursuit of pushing technological frontiers. I am seeking to collaborate on ambitious projects and continue to hone my skills in technology.",
            projectsTitle: "Featured Projects",
            minorProjectsTitle: "Other Projects",
            insignificantProjectsTitle: "Studies & Challenges",
            filterAll: "All",
            filterButton: "Filters",
            repoButton: "Repository",
            liveUrlText: "View Live",
        }
    };
    const t = (key) => translations[language][key] || key;
    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

const Starfield = () => {
    const canvasRef = useRef(null);
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
                stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, z: Math.random() * canvas.width, size: Math.random() * 2 + 0.5 });
            }
        };
        const render = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.7)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
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

const ProjectCard = ({ project }) => {
    const { t } = useLanguage();
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    const hasLiveLink = project.liveUrl && project.liveUrl !== "#";
    const hasRepoLink = project.repoUrl && project.repoUrl !== "#";

    return (
        <div ref={ref} className={`project-card fade-in ${isVisible ? 'visible' : ''}`}>
             <a href={hasRepoLink ? project.repoUrl : (hasLiveLink ? project.liveUrl : '#')} target="_blank" rel="noopener noreferrer" className="project-card__image-link">
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className="project-card-no-image">
                         <i className={project.icon || "fas fa-tools"}></i>
                    </div>
                )}
            </a>
            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                 <div className="tech-tags">{project.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}</div>
                <div className="card-footer">
                    {hasRepoLink && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{t('repoButton')}</a>}
                    {hasLiveLink && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">{project.liveUrlText || t('liveUrlText')}</a>}
                </div>
            </div>
        </div>
    );
};

const InsignificantProjectItem = ({ project }) => {
    const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
    return (
        <div ref={ref} className={`insignificant-project-item fade-in ${isVisible ? 'visible' : ''}`}>
            <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
            </div>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Repositório</a>
        </div>
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('All');
    const allTechs = [...new Set([...relevantProjects, ...minorProjects].flatMap(p => p.technologies))];
    
    const filterProjects = (projects) => {
        if (activeFilter === 'All') return projects;
        return projects.filter(p => p.technologies.includes(activeFilter));
    };

    return (
        <React.Fragment>
            <section className="projects">
                <div className="container">
                    <AnimatedDiv><h2>{t('projectsTitle')}</h2></AnimatedDiv>
                    <AnimatedDiv className="filter-wrapper">
                        <button onClick={() => setActiveFilter('All')} className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}>{t('filterAll')}</button>
                        {allTechs.sort().map(tech => (
                            <button key={tech} onClick={() => setActiveFilter(tech)} className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}>{tech}</button>
                        ))}
                    </AnimatedDiv>
                    <div className="project-grid">{filterProjects(relevantProjects).map((p, i) => <ProjectCard key={`rel-${i}`} project={p} />)}</div>
                </div>
            </section>
            <section className="projects">
                <div className="container">
                    <AnimatedDiv><h2>{t('minorProjectsTitle')}</h2></AnimatedDiv>
                    <div className="project-grid">{filterProjects(minorProjects).map((p, i) => <ProjectCard key={`min-${i}`} project={p} />)}</div>
                </div>
            </section>
            <section className="projects">
                <div className="container">
                    <AnimatedDiv><h2>{t('insignificantProjectsTitle')}</h2></AnimatedDiv>
                    <div className="insignificant-project-grid">{insignificantProjects.map((p, i) => <InsignificantProjectItem key={`insig-${i}`} project={p} />)}</div>
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