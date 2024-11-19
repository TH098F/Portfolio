import {type Config, Skills, ProjectTags} from '../../config/config_types.ts';

const config: Config = {
    url: "http://localhost",
    name: "TH098",
    skills: {
        back_end: [
            Skills.Cpp,
            Skills.C,
            Skills.Python,
            Skills.NodeJS,
            Skills.Rust
        ],
        front_end: [
            Skills.HTML,
            Skills.CSS,
            Skills.Astro,
            Skills.JavaScript,
            Skills.TypeScript
        ],
        tech: [
            Skills.VSCode,
            Skills.Git,
            Skills.GitHub,
            Skills.MySQL
        ],
        other: []
    },
    projects: [{name: "test", tags: [ProjectTags.OpenSource], technologies: [Skills.JavaScript]}],
    links: {
        github: "https://github.com/TH098F",
        email: "mailto:th098f@proton.me"
    },
    typewrite_words: ["test test test", "hello"]
};

export default config;