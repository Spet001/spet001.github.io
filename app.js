const { useState, useEffect, useRef, createContext, useContext } = React;

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
            description: "Atuei como QA Analyst profissional no desenvolvimento de 'Sparky Rush', um jogo de plataforma 3D publicado na Steam. Identifiquei e documentei mais de 50 bugs críticos, realizei testes extensivos de gameplay e ajudei a garantir a qualidade do produto final antes do lançamento comercial."
        },
        en: {
            title: "QA Analyst - Sparky Rush",
            description: "Worked as a professional QA Analyst on the development of 'Sparky Rush', a 3D platformer published on Steam. Identified and documented over 50 critical bugs, conducted extensive gameplay testing, and helped ensure product quality before commercial release."
        }
    },
    {
        id: 'outcaster',
        image: "assets/Outcaster1.jpg",
        technologies: ["Unity", "C#", "Game Development"],
        repoUrl: "https://github.com/Spet001/Outcaster",
        category: 'relevant',
        pt: {
            title: "Outcaster - FPS Autoral",
            description: "Lidero o desenvolvimento de um FPS de alta velocidade no estilo 'boomer shooter' com uma equipe de 15 desenvolvedores. O projeto utiliza Unity e C# para criar mecânicas de movimento fluido, combate intenso e estética retrô-futurista, com foco na experiência de gameplay acelerada."
        },
        en: {
            title: "Outcaster - Original FPS Game",
            description: "Leading the development of a high-speed 'boomer shooter' style FPS with a team of 15 developers. The project uses Unity and C# to create fluid movement mechanics, intense combat, and retro-futuristic aesthetics, focusing on fast-paced gameplay experience."
        }
    },
    {
        id: 'pau_no_gato',
        image: "https://img.itch.zone/aW1nLzIzNjkzMTg4LnBuZw==/315x250%23c/eUMvyr.png",
        technologies: ["Unity", "C#", "Game Design", "GameJam"],
        liveUrl: "https://zodiacogames.itch.io/atirei-o-pau-no-gato-mas-o-gato-no-morreu-e-agora-ele-vai-se-vingar",
        liveUrlTextKey: "itchIo",
        category: 'relevant',
        pt: {
            title: "Atirei o Pau no Gato - GameJam+ 2025",
            description: "Jogo desenvolvido para a GameJam+ 2025 que passou para a fase de incubação. Um projeto criativo que mistura humor brasileiro com mecânicas de jogo inovadoras. O sucesso na GameJam garantiu recursos adicionais para expansão e polimento do conceito original."
        },
        en: {
            title: "I Threw a Stick at the Cat - GameJam+ 2025",
            description: "Game developed for GameJam+ 2025 that advanced to the incubation phase. A creative project that blends Brazilian humor with innovative game mechanics. Success in the GameJam secured additional resources for expansion and refinement of the original concept."
        }
    },
    {
        id: 'bo3_injector',
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg",
        technologies: ["C#", ".NET", "Reverse Engineering", "GSC"],
        repoUrl: "https://github.com/Spet001/BO3-MicrosoftStore-GSC-Injector",
        category: 'relevant',
        pt: {
            title: "BO3 GSC Injector - Microsoft Store",
            description: "Injetor avançado de scripts GSC (Game Script Code) para Call of Duty Black Ops 3 versão Microsoft Store. Utiliza técnicas sofisticadas de engenharia reversa para contornar as proteções UWP e permitir execução de scripts customizados em uma versão tradicionalmente fechada do jogo."
        },
        en: {
            title: "BO3 GSC Injector - Microsoft Store",
            description: "Advanced GSC (Game Script Code) injector for Call of Duty Black Ops 3 Microsoft Store version. Uses sophisticated reverse engineering techniques to bypass UWP protections and enable custom script execution in a traditionally locked game version."
        }
    },
    {
        id: 'dark_souls_suite',
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/211420/header.jpg",
        technologies: ["JavaScript", "PowerShell", "Electron", "Node.js"],
        repoUrl: "https://github.com/Spet001/Dark-Souls-PTDE-Enhancement-Suite",
        category: 'relevant',
        pt: {
            title: "Dark Souls PTDE Enhancement Suite",
            description: "Aplicação desktop completa desenvolvida em Electron para modernizar Dark Souls: Prepare to Die Edition. Inclui correções de registro, instalador automático de mods, integração FSR para upscaling, e interface multilíngue. Um toolkit abrangente que resolve problemas de compatibilidade e melhora significativamente a experiência em sistemas modernos."
        },
        en: {
            title: "Dark Souls PTDE Enhancement Suite",
            description: "Complete desktop application developed in Electron to modernize Dark Souls: Prepare to Die Edition. Includes registry fixes, automatic mod installer, FSR integration for upscaling, and multilingual interface. A comprehensive toolkit that resolves compatibility issues and significantly improves the experience on modern systems."
        }
    },
    {
        id: 'ff13fix',
        image: "https://staticdelivery.nexusmods.com/mods/2086/images/thumbnails/59/59-1754939857-517189306.png",
        technologies: ["Python", "C#", "Reverse Engineering", "UWP"],
        repoUrl: "https://github.com/Spet001/FF13-MS-Store",
        liveUrl: "https://www.nexusmods.com/finalfantasy13/mods/59",
        liveUrlTextKey: "nexus",
        category: 'relevant',
        pt: {
            title: "FF13Fix UWP - Mod Loader",
            description: "Realizei engenharia reversa completa do FF13Fix para criar compatibilidade com a versão UWP da Microsoft Store. O projeto quebra as proteções de sandboxing da plataforma, permitindo injeção de DLLs e carregamento de mods em um ambiente tradicionalmente fechado."
        },
        en: {
            title: "FF13Fix UWP - Mod Loader",
            description: "Performed complete reverse engineering of FF13Fix to create compatibility with the Microsoft Store UWP version. The project breaks platform sandboxing protections, enabling DLL injection and mod loading in a traditionally closed environment."
        }
    },
    {
        id: 'autoparms',
        image: "https://staticdelivery.nexusmods.com/mods/7333/images/thumbnails/181/181-1754787442-12213008.png",
        technologies: ["Python", "Reverse Engineering", "UWP Exploitation"],
        liveUrl: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/181",
        liveUrlTextKey: "nexus",
        category: 'relevant',
        pt: {
            title: "AutoParMS - UWP Mod Injector",
            description: "Ferramenta avançada de engenharia reversa que contorna as limitações de segurança da plataforma UWP para permitir modificações em 'Like a Dragon'. Utiliza técnicas de injeção de processo e manipulação de memória para habilitar mods em um ambiente restrito."
        },
        en: {
            title: "AutoParMS - UWP Mod Injector",
            description: "Advanced reverse engineering tool that bypasses UWP platform security limitations to enable modifications in 'Like a Dragon'. Uses process injection techniques and memory manipulation to enable mods in a restricted environment."
        }
    },
    {
        id: 'boiii_uwp',
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg",
        technologies: ["C", "C++", "Electron", "DLL Injection"],
        repoUrl: "https://github.com/Spet001/BOIII-ReImagined-UWP",
        category: 'relevant',
        pt: {
            title: "BOIII Reimagined UWP",
            description: "Cliente customizado completo para Call of Duty Black Ops 3 versão UWP com instalador Electron. Inclui injeção de DLLs da Microsoft Store (XCurl, GameChat2, Party), sistema de backup automático, compatibilidade cruzada Steam/MS Store e navegador de servidores aprimorado para experiência multiplayer completa."
        },
        en: {
            title: "BOIII Reimagined UWP",
            description: "Complete custom client for Call of Duty Black Ops 3 UWP version with Electron installer. Includes Microsoft Store DLL injection (XCurl, GameChat2, Party), automatic backup system, Steam/MS Store cross-compatibility, and enhanced server browser for complete multiplayer experience."
        }
    },
    {
        id: 'ladfixms',
        image: "https://staticdelivery.nexusmods.com/mods/7333/images/thumbnails/187/187-1757613976-1077513334.png",
        technologies: ["Python", "Reverse Engineering", "UWP Exploitation"],
        liveUrl: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/187#",
        liveUrlTextKey: "nexus",
        category: 'relevant',
        pt: {
            title: "LADFixMS - DLL Injection Tool",
            description: "Sistema avançado de injeção de DLLs especificamente desenvolvido para 'Like a Dragon Pirate Yakuza' na plataforma UWP. Utiliza técnicas sofisticadas de bypass de segurança para contornar as limitações impostas pela Microsoft Store, permitindo modificações profundas no comportamento do jogo."
        },
        en: {
            title: "LADFixMS - DLL Injection Tool",
            description: "Advanced DLL injection system specifically developed for 'Like a Dragon Pirate Yakuza' on UWP platform. Uses sophisticated security bypass techniques to circumvent Microsoft Store limitations, enabling deep modifications to game behavior."
        }
    },
    // Projetos Menores - Ordem reorganizada por relevância
    {
        id: 'bioshock2_fix',
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/8850/header.jpg",
        technologies: ["JavaScript", "Electron", "Node.js", "DXVK"],
        repoUrl: "https://github.com/Spet001/Bioshock-2-GFWL-CrashFix",
        category: 'minor',
        pt: {
            title: "Bioshock 2 GFWL CrashFix",
            description: "Aplicação desktop Electron que automatiza a correção de crashes na versão GFWL de Bioshock 2. Instala DXVK para melhor compatibilidade, corrige arquivos de configuração corrompidos, protege settings contra futuras corrupções e inclui interface multilíngue com sistema de log detalhado."
        },
        en: {
            title: "Bioshock 2 GFWL CrashFix",
            description: "Electron desktop application that automates crash fixes for the GFWL version of Bioshock 2. Installs DXVK for better compatibility, fixes corrupted configuration files, protects settings against future corruption, and includes multilingual interface with detailed logging system."
        }
    },
    {
        id: 'fable3_fixer',
        image: "https://staticdelivery.nexusmods.com/mods/1393/images/thumbnails/27/27-1760404050-299923963.png",
        technologies: ["JavaScript", "Electron", "DXVK", "ReShade"],
        repoUrl: "https://github.com/Spet001/Fable3Fixer",
        liveUrl: "https://www.nexusmods.com/fableIII/mods/27",
        liveUrlTextKey: "nexus",
        category: 'minor',
        pt: {
            title: "Fable 3 Fixer",
            description: "Aplicação Electron de um clique que moderniza Fable 3 automaticamente. Instala DXVK para dobrar o FPS via renderização Vulkan, aplica preset ReShade compatível com GFWL para melhorias visuais, e inclui patch 4GB para estabilidade. Interface simples com instalação automática de todas as correções necessárias."
        },
        en: {
            title: "Fable 3 Fixer",
            description: "One-click Electron application that automatically modernizes Fable 3. Installs DXVK to double FPS via Vulkan rendering, applies GFWL-compatible ReShade preset for visual improvements, and includes 4GB patch for stability. Simple interface with automatic installation of all necessary fixes."
        }
    },
    {
        id: 'yugioh_web',
        image: "https://api.duniagames.co.id/optimize-image?url=https%3A%2F%2Fapi.duniagames.co.id%2Fapi%2Fcontent%2Fupload%2Ffile%2F10761004641617614978.jpg&format=webp&width=736&signature=9ae54855200869f03ce89432e0bb46891a19c5c1607441acbbee41a57ff13860",
        technologies: ["JavaScript", "HTML5", "CSS3", "Web Development"],
        repoUrl: "https://github.com/Spet001/Yu-Gi-Oh-Forbidden-Memories-Web",
        category: 'minor',
        pt: {
            title: "Yu-Gi-Oh! Forbidden Memories Web",
            description: "Recriação web fiel do clássico Yu-Gi-Oh! Forbidden Memories para PlayStation. Implementa as mecânicas originais do jogo, sistema de cartas, batalhas e progressão usando tecnologias web modernas para uma experiência nostálgica acessível em qualquer navegador."
        },
        en: {
            title: "Yu-Gi-Oh! Forbidden Memories Web",
            description: "Faithful web recreation of the classic Yu-Gi-Oh! Forbidden Memories for PlayStation. Implements original game mechanics, card system, battles, and progression using modern web technologies for an accessible nostalgic experience in any browser."
        }
    },
    {
        id: 'outer_worlds_fix',
        image: "https://staticdelivery.nexusmods.com/mods/3037/images/thumbnails/255/255-1759781056-241650861.jpg",
        technologies: ["C++", "Game Modding", "Performance Optimization"],
        repoUrl: "https://github.com/Spet001/The-Outer-Worlds-Fix",
        liveUrl: "https://www.nexusmods.com/theouterworlds/mods/255",
        liveUrlTextKey: "nexus",
        category: 'minor',
        pt: {
            title: "The Outer Worlds Fix",
            description: "Mod de correção e otimização para The Outer Worlds que resolve diversos problemas de performance e compatibilidade. Inclui melhorias de framerate, correções de bugs visuais e otimizações de memória para uma experiência de jogo mais estável e fluida em sistemas modernos."
        },
        en: {
            title: "The Outer Worlds Fix",
            description: "Correction and optimization mod for The Outer Worlds that resolves various performance and compatibility issues. Includes framerate improvements, visual bug fixes, and memory optimizations for a more stable and fluid gaming experience on modern systems."
        }
    },
    {
        id: 'qos_injector',
        image: "https://staticdelivery.nexusmods.com/mods/6689/images/thumbnails/77/77-1757967325-194898673.png",
        technologies: ["Python", "DLL Injection", "Graphics APIs"],
        liveUrl: "https://www.nexusmods.com/007quantumofsolace/mods/77",
        liveUrlTextKey: "nexus",
        category: 'minor',
        pt: {
            title: "007 Quantum of Solace - Vulkan/DXVK Injector",
            description: "Script Python avançado para injeção de DLLs em '007 Quantum of Solace', habilitando APIs gráficas modernas como Vulkan através do DXVK. Melhora significativamente a performance e compatibilidade do jogo em hardware atual."
        },
        en: {
            title: "007 Quantum of Solace - Vulkan/DXVK Injector",
            description: "Advanced Python script for DLL injection in '007 Quantum of Solace', enabling modern graphics APIs like Vulkan through DXVK. Significantly improves game performance and compatibility on current hardware."
        }
    },
    {
        id: 'better_xcloud',
        image: "https://appteka.store/get/e2Uh17U-CKFD0EQCzMbpVnbmW7eAunos9DEZh4qwjhcwzjVLguNCNDY6pzVAOxl-HxsQW9JgUk-L8SGs544iQ4kU-I4=/7e569a30fdeba1ec3e9e780f198238e06df18896.png",
        technologies: ["JavaScript", "Web Optimization", "Cloud Gaming"],
        repoUrl: "https://github.com/Spet001/better-xcloud-optimized",
        category: 'minor',
        pt: {
            title: "Better XCloud Optimized",
            description: "Fork otimizado do projeto 'better-xcloud' com refatorações JavaScript para TamperMonkey. Melhora significativamente a nitidez de imagem, reduz latência e otimiza a performance geral do serviço Xbox Cloud Gaming para uma experiência superior."
        },
        en: {
            title: "Better XCloud Optimized",
            description: "Optimized fork of the 'better-xcloud' project with JavaScript refactoring for TamperMonkey. Significantly improves image sharpness, reduces latency, and optimizes overall Xbox Cloud Gaming service performance for superior experience."
        }
    },
    {
        id: 'ff13_injector',
        image: "./assets/ff13-traducao.png",
        technologies: ["PowerShell", "File Injection", "Game Modding"],
        repoUrl: "https://github.com/Spet001/FF13--PTBR-MS-Store",
        category: 'minor',
        pt: {
            title: "FF13 PTBR Injector",
            description: "Injetor PowerShell especializado para instalação direta de arquivos de modificação na imagem do jogo Final Fantasy XIII. Automatiza o processo de aplicação de patches e mods, incluindo traduções, em versões protegidas do jogo."
        },
        en: {
            title: "FF13 PTBR Injector",
            description: "Specialized PowerShell injector for direct installation of modification files into Final Fantasy XIII game image. Automates the process of applying patches and mods, including translations, to protected game versions."
        }
    },
    {
        id: 'gzdoom_uwp',
        image: "https://cdn2.steamgriddb.com/logo_thumb/4e680e460ccee706272f2e7ddc974adb.png",
        technologies: ["C", "UWP", "Xbox DevMode", "Engine Porting"],
        repoUrl: "https://github.com/Spet001/gzdoom_test",
        category: 'minor',
        pt: {
            title: "GZDoom UWP/Xbox Port - WIP",
            description: "Port experimental do engine GZDoom para ambientes UWP e Xbox DevKits. Explora a viabilidade de executar engines de jogos clássicos em plataformas modernas fechadas, investigando limitações e possibilidades de portabilidade."
        },
        en: {
            title: "GZDoom UWP/Xbox Port - WIP",
            description: "Experimental port of GZDoom engine to UWP environments and Xbox DevKits. Explores the feasibility of running classic game engines on modern closed platforms, investigating limitations and portability possibilities."
        }
    },
    {
        id: 'gamelist_extractor',
        image: "https://icons.veryicon.com/png/o/miscellaneous/effevo/game-49.png",
        technologies: ["Python", "Selenium", "Tkinter", "Web Scraping"],
        repoUrl: "https://github.com/Spet001/Xbox-Gamelist-Extractor",
        category: 'minor',
        pt: {
            title: "Xbox Gamelist Extractor",
            description: "Aplicação desktop com interface gráfica que utiliza web scraping automatizado com Selenium para extrair listas completas de jogos de perfis Xbox. Inclui exportação de dados e análise de estatísticas de gaming do usuário."
        },
        en: {
            title: "Xbox Gamelist Extractor",
            description: "Desktop application with graphical interface that uses automated web scraping with Selenium to extract complete game lists from Xbox profiles. Includes data export and user gaming statistics analysis."
        }
    },
    {
        id: 'cadeirante_sim',
        image: "assets/cadeirante-simulator.gif",
        technologies: ["Unity", "C#", "Physics Simulation", "Comedy Game"],
        repoUrl: "https://github.com/Spet001/Cadeirante-Simulator--The-Game",
        category: 'minor',
        pt: {
            title: "Project GoofyGame - WIP",
            description: "Jogo experimental de comédia que explora físicas exageradas e situações absurdas através de ragdoll extremo. Utiliza a engine Unity para criar momentos inesperados e hilaros, testando os limites da simulação física para entretenimento."
        },
        en: {
            title: "Project GoofyGame - WIP",
            description: "Experimental comedy game that explores exaggerated physics and absurd situations through extreme ragdoll mechanics. Uses Unity engine to create unexpected and hilarious moments, testing the limits of physics simulation for entertainment."
        }
    },
    {
        id: 'pygopher',
        image: "https://marketplace.canva.com/FEYrM/MAGCfbFEYrM/1/tl/canva-neon-esports-gaming-joystick-icon-MAGCfbFEYrM.png",
        technologies: ["Python", "Tkinter", "Pygame", "Accessibility"],
        repoUrl: "https://github.com/Spet001/PYGopher",
        category: 'minor',
        pt: {
            title: "PYGopher - Controle de Mouse via Joystick",
            description: "Modernização completa do Gopher360 reescrita em Python. Permite controle total do mouse através de joystick para acessibilidade e setups personalizados, com interface configurável e suporte a múltiplos dispositivos de entrada."
        },
        en: {
            title: "PYGopher - Joystick Mouse Control",
            description: "Complete modernization of Gopher360 rewritten in Python. Enables full mouse control via joystick for accessibility and custom setups, with configurable interface and support for multiple input devices."
        }
    },
    {
        id: 'textmap_converter',
        image: "https://aitap.github.io/2024/01/01/incomplete_sectors.png",
        technologies: ["Python", "3D Conversion", "UDMF", "Game Tools"],
        repoUrl: "https://github.com/Spet001/TEXTMAP-to-Unity-Object",
        category: 'minor',
        pt: {
            title: "Conversor TEXTMAP para OBJ",
            description: "Ferramenta de linha de comando especializada para conversão de mapas Doom (formato UDMF) em modelos 3D OBJ. Preserva geometria complexa, texturas e metadados para reutilização em engines modernas e ferramentas de modelagem 3D."
        },
        en: {
            title: "TEXTMAP to OBJ Converter",
            description: "Specialized command-line tool for converting Doom maps (UDMF format) into 3D OBJ models. Preserves complex geometry, textures, and metadata for reuse in modern engines and 3D modeling tools."
        }
    },
    {
        id: 'doom_wad_ptbr',
        image: "/assets/demotranslate.gif",
        technologies: ["SLADE", "Graphics Design", "Game Localization"],
        repoUrl: "https://github.com/Spet001/Doom-WAD-Traduzido-PTBR",
        category: 'minor',
        pt: {
            title: "Doom WAD Traduzido - PT-BR",
            description: "Tradução gráfica completa do WAD original do Doom para português brasileiro. Inclui adaptação cultural de todas as telas, menus, HUDs e elementos visuais mantendo perfeitamente a estética pixel art clássica dos anos 90."
        },
        en: {
            title: "Doom WAD Translated - PT-BR",
            description: "Complete graphic translation of the original Doom WAD to Brazilian Portuguese. Includes cultural adaptation of all screens, menus, HUDs, and visual elements while perfectly maintaining the classic 90s pixel art aesthetic."
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
            available: "Online!",
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
            itchIo: "Ver na itch.io",
            interactiveNote: "O meu portfólio é dinâmico! Use as setas <span class='kbd-key'>&uarr;</span> <span class='kbd-key'>&larr;</span> <span class='kbd-key'>&darr;</span> <span class='kbd-key'>&rarr;</span> para controlar o background!",
            doomExit: "Sair do DOOM",
            easterEggHint: "P.S. Não há easter eggs aqui. Continue procurando...",
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
            itchIo: "View on itch.io",
            interactiveNote: "My portfolio is dynamic! Use the arrow keys <span class='kbd-key'>&uarr;</span> <span class='kbd-key'>&larr;</span> <span class='kbd-key'>&darr;</span> <span class='kbd-key'>&rarr;</span> to control the background!",
            doomExit: "Exit DOOM",
            easterEggHint: "P.S. There are no easter eggs here. Keep looking...",
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
    const resumeUrl = language === 'en' ? './assets/Eduardo_Gelain_Dev.pt.en.pdf' : './assets/Eduardo_Gelain_Dev.pdf';
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

const DoomEasterEgg = ({ onExit }) => {
    const { t } = useLanguage();
    return (
        <div className="doom-container">
            <iframe
                className="doom-iframe"
                src="https://ustymukhman.github.io/webDOOM/public/"
                title="webDOOM Easter Egg"
                allowFullScreen
            ></iframe>
            <button onClick={onExit} className="doom-exit-btn">
                <i className="fas fa-times"></i> {t('doomExit')}
            </button>
        </div>
    );
};

const EasterEggTrigger = ({ onActivate }) => {
    const { t } = useLanguage();
    const [ref, isVisible] = useFadeIn({ threshold: 0.2 });
     const imageUrl = "https://static.wikia.nocookie.net/gta-myths/images/b/b4/Gant_Bridge_Easter_Egg_Sign.png";

    return (
        <AnimatedDiv className="easter-egg-section">
            <div ref={ref} className="easter-egg-trigger" onClick={onActivate}>
                <img 
                    src={imageUrl}
                    alt="No Easter Eggs Here"
                />
                <p>{t('easterEggHint')}</p>
            </div>
        </AnimatedDiv>
    );
};

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

const App = () => {
    const [isDoomActive, setIsDoomActive] = useState(false);

    return (
        <LanguageProvider>
            {isDoomActive ? (
                <DoomEasterEgg onExit={() => setIsDoomActive(false)} />
            ) : (
                <React.Fragment>
                    <Starfield />
                    <div className="app">
                        <Header />
                        <main>
                            <About />
                            <Projects />
                            <EasterEggTrigger onActivate={() => setIsDoomActive(true)} />
                        </main>
                        <Footer />
                    </div>
                </React.Fragment>
            )}
        </LanguageProvider>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
