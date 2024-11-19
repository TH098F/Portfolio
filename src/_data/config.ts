import {type Config, Skills, ProjectTags} from '../../config/config_types.ts';

const config: Config = {
    url: "http://localhost",
    name: "TH098",
    skills: {
        back_end: [
            "C++",
            "C",
            "Python",
            "Node.js",
            "Rust"
        ],
        front_end: [
            "HTML",
            "CSS",
            "Astro",
            "JavaScript",
            "TypeScript"
        ],
        tech: [
            "VS Code",
            "Git",
            "GitHub",
            "MySQL"
        ],
        other: []
    },
    projects: [{name: "test", tags: ["Open-Source"], technologies: ["JavaScript"]}],
    links: {
        github: "https://github.com/TH098F",
        email: "mailto:th098f@proton.me"
    },
    typewrite_words: ["test test test", "hello"]
};

export default config;