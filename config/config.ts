import {type Config, ProjectTag, Skill} from './config_types.ts';

const config: Config = {
    url: "http://th098f.github.io",
    base: "Portfolio",
    name: "TH098",
    skills: {
        back_end: [
            Skill.Cpp,
            Skill.C,
            Skill.Python,
            Skill.NodeJS,
            Skill.Rust
        ],
        front_end: [
            Skill.HTML,
            Skill.CSS,
            Skill.Astro,
            Skill.JavaScript,
            Skill.TypeScript
        ],
        tech: [
            Skill.VSCode,
            Skill.Git,
            Skill.GitHub,
            Skill.SQL,
            Skill.MySQL
        ],
        other: [
            Skill.Vulkan,
            Skill.DirectX
        ]
    },
    projects: [
        {
            name: "Arch Engine", tags: [ProjectTag.ClosedSource, ProjectTag.Graphics], technologies: [Skill.Cpp, Skill.C, Skill.VSCode, Skill.Make],
            desc: {
                en: "Arch is an API-agnostic rendering engine built on top of Vulkan, DirectX12, and OpenGL. Arch was originally me teaching myself Vulkan, but I later turned it into a whole project and added DirectX12 support. The Vulkan only version was written in C, but I later changed to C++ for it's OOP features.",
                de: "Arch ist eine API-agnostische Rendering Engine für Vulkan, DirectX12 und OpenGL. Arch war anfangs einfach nur ein kleines Projekt mit dem ich mir Vulkan beibringen wollte, dies ist dann aber später ausgeartet zu einem vollständigen Renderer. Die ursprüngliche Version war in C geschrieben, während die aktuelle Version C++ benutzt für OOP Features."
            },
            preview: "archPreview.png" // TODO: fix that testing needs the base (/portfolio_v2) but deployment on GH pages doesn't
        },
        {
            name: "Portfolio", tags: [ProjectTag.OpenSource, ProjectTag.WebDev], technologies: [Skill.TypeScript, Skill.Astro, Skill.CSS],
            desc: {
                en: "This Portfolio is a fork of theMelon's portfolio. I wanted to turn his portfolio (atleast the version I forked from) into a dynamic version which could then be used as an easy to use 'template'.",
                de: "Dieses Portfolio ist eine fork von theMelon's Portfolio. Ich wollte die version von der ich damals eine fork erstallt hab, zu einer Dynamischen version mit besserer Konfigurationsoptionen ändern, so dass man es als eine 'Vorlage' benutzten könnte wenn man möchte."
            },
            preview: "portfolioPreview.png",
            links: {
                github: "https://github.com/TH098F/Portfolio",
                live: "https://th098f.github.io/Portfolio"
            }
        }
    ],
    links: {
        github: "https://github.com/TH098F",
        email: "th098f@proton.me"
    },
    typewriter_words: {
        en: ["Hello I'm TH098","It's pronounced 'Theo'","Cinnamon Rolls"],
        de: ["Hallo Ich bin TH098", "Zimtschnecken", "Nachts ist kälter als Draußen"]
    }
};

export default config;