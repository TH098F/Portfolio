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
            Skill.MySQL
        ],
        other: []
    },
    projects: [{name: "test", tags: [ProjectTag.OpenSource], technologies: [Skill.JavaScript]}],
    links: {
        github: "https://github.com/TH098F",
        email: "mailto:th098f@proton.me"
    },
    typewrite_words: ["test test test", "hello"]
};

export default config;