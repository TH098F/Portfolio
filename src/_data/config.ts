import {type Config, ProjectTag, Skill} from '../../config/config_types.ts';

const config: Config = {
    url: "http://th098f.github.io",
    base: "portfolio_v2",
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
            name: "Arch Engine", tags: [ProjectTag.ClosedSource, ProjectTag.Graphics], technologies: [Skill.Cpp, Skill.C, Skill.VSCode],
            desc: "Arch is an API-agnostic rendering engine built on top of Vulkan and DirectX11. I plan to extend it to DirectX12 and OpenGL in the future. Arch was originally me teaching myself Vulkan, but I later turned it into a whole project and added DirectX11 support. The Vulkan only version was written in C, but I later changed to C++ for it's OOP features",
            preview: "archPreview.png" // TODO: fix that testing needs the base (/portfolio_v2) but deployment on GH pages doesn't
        },
        {
            name: "Portfolio", tags: [ProjectTag.OpenSource, ProjectTag.WebDev], technologies: [Skill.TypeScript, Skill.Astro, Skill.CSS],
            desc: "This Portfolio is a fork of theMelon's portfolio. I wanted to turn his portfolio into a dynamic version which could then be used as an easy to use 'template'.",
            preview: "portfolioPreview.png",
            links: {
                github: "https://github.com/TH098F/portfolio_v2",
                live: "https://th098f.github.io/portfolio_v2"
            }
        }
    ],
    links: {
        github: "https://github.com/TH098F",
        email: "th098f@proton.me"
    },
    typewrite_words: ["Hello I'm TH098","It's pronounced 'Theo'","Cinnamon Rolls"]
};

export default config;