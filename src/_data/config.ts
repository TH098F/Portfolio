import {type Config, ProjectTag, Skill} from '../../config/config_types.ts';

const config: Config = {
    url: "http://localhost",
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
            desc: "\"Arch\" is an API-agnostic rendering engine build on top of Vulkan and DirectX11. I plan to extend it to DirectX12 and OpenGL in the future. Arch was originally just a way for me to teach myself Vulkan, but i later turned it into a whole project and added DirectX11 support. The pure Vulkan version was written in C, but I later changed to C++ for it's features like 'methods'"
        },
        {
            name: "Portfolio", tags: [ProjectTag.OpenSource, ProjectTag.WebDev], technologies: [Skill.TypeScript, Skill.Astro, Skill.CSS],
            desc: "My Portfolio is a fork of <a href=\"theMelon.live>theMelon</a>'s portfolio. I wanted to turn his portfolio into a dynamic version which could then be used as an easy to use 'template'.\""
        }
    ],
    links: {
        github: "https://github.com/TH098F",
        email: "mailto:th098f@proton.me"
    },
    typewrite_words: ["Hello I'm TH098","It's pronounced: Theo","Cinnamon Rolls"]
};

export default config;