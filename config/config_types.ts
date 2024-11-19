interface SkillEntry {
    name: string, // the string to display for its name
    color: string, // TODO: maybe make this into actual color type
    icon: string, // CSS class(es) of the icon
    link: string
}

export const Skills: SkillEntry[] = [
    // languages
    { name: "C", color: "#000000", icon: "", link: "" },
    { name: "C++", color: "#000000", icon: "", link: "" },
    { name: "C#", color: "#000000", icon: "", link: "" },
    { name: "Python", color: "#000000", icon: "", link: "" },
    { name: "Rust", color: "#000000", icon: "", link: "" },
    { name: "Java", color: "#000000", icon: "", link: "" },
    { name: "JavaScript", color: "#fff700", icon: "fab fa-js", link: "" },
    { name: "TypeScript", color: "#3178C6", icon: "lni lni-typescript", link: "https://www.typescriptlang.org" },
    { name: "PHP", color: "#000000", icon: "", link: "" },
    { name: "Ruby", color: "#000000", icon: "", link: "" },
    { name: "Go", color: "#000000", icon: "", link: "" },
    { name: "Swift", color: "#000000", icon: "", link: "" },
    { name: "Kotlin", color: "#000000", icon: "", link: "" },
    { name: "Elixir", color: "#000000", icon: "", link: "" },
    { name: "Erlang", color: "#000000", icon: "", link: "" },
    { name: "Lua", color: "#000000", icon: "", link: "" },
    { name: "Perl", color: "#000000", icon: "", link: "" },

    // web
    { name: "HTML", color: "#ff3300", icon: "fab fa-html5", link: "" },
    { name: "CSS", color: "#2071fe", icon: "fab fa-css3-alt", link: "" },

    // JS
    { name: "React", color: "#61DBFB", icon: "fab fa-react", link: "https://react.dev" },
    { name: "Angular", color: "#000000", icon: "", link: "" },
    { name: "Vue", color: "#000000", icon: "", link: "" },
    { name: "Node.js", color: "#000000", icon: "", link: "" },
    { name: "Express.js", color: "#000000", icon: "", link: "" },
    { name: "Astro", color: "#FF3E00", icon: "fas fa-rocket", link: "https://astro.build" },

    // DB
    { name: "SQL", color: "#000000", icon: "", link: "" },
    { name: "MySQL", color: "#FFD700", icon: "lni lni-mysql", link: "" },
    { name: "SQLite", color: "#000000", icon: "", link: "" },
    { name: "PostGreSQL", color: "#000000", icon: "", link: "" },
    { name: "MongoDB", color: "#47A248", icon: "lni lni-mongodb", link: "" },
    { name: "REST", color: "#FF5733", icon: "fas fa-network-wired", link: "" },

    // TECH
    { name: "VS Code", color: "#007ACC", icon: "lni lni-vs-code", link: "https://code.visualstudio.com" },
    { name: "Git", color: "#F34F29", icon: "fab fa-git-alt", link: "" },
    { name: "GitHub", color: "#eee", icon: "fab fa-github", link: "" },
]
type Skill = string;
export const SkillMap = Skills.reduce((acc, s) => {
    acc[s.name] = {color: s.color, icon: s.icon, link: s.link}
    return acc;
}, {} as Record<string, {color: string, icon: string, link: string}>);

export interface ProjectTagEntry {
    name: string,
    icon: string
}

export const ProjectTags: ProjectTagEntry[] = [
    { name: "Full-Stack", icon: "" },
    { name: "Front-End", icon: "" },,
    { name: "Back-End", icon: "" },,
    { name: "Open-Source", icon: "" },,
    { name: "Closed-Source", icon: "" },
];
type ProjectTag = string;
export const ProjectTagMap = ProjectTags.reduce((acc, s) => {
    acc[s.name] = {icon: s.icon}
    return acc;
}, {} as Record<string, {icon: string}>);

export interface Project {
    name: string,
    tags: ProjectTag[],
    technologies: Skill[],
    preview?: string,
    desc?: string
};

//TODO: add contributions

export interface Config {
    url?: string,
    name: string,
    skills: {
        back_end: Skill[],
        front_end: Skill[],
        tech: Skill[],
        other: Skill[]
    },
    projects: Project[],
    // introduction?: string,
    links?: {
        github?: string,
        email?: string,
        discord?: string
    },
    typewrite_words?: string[]
};