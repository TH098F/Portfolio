export enum Skills {
    C, Cpp, Rust, TypeScript, Java, JavaScript, Csharp, Python,
    NodeJS, ExpressJS,
    CSS, HTML, Sass,
    React, Astro,
    VSCode, Git, GitHub,
    MySQL, MongoDB, REST
};

export namespace Skills {
    export function color(s: Skills): string {
        switch (s) {
            case Skills.C:
                return "";
            case Skills.Cpp:
                return "";
            case Skills.Rust:
                return "";
            case Skills.TypeScript:
                return "#3178C6";
            case Skills.Java:
                return "";
            case Skills.JavaScript:
                return "#fff700";
            case Skills.Csharp:
                return "";
            case Skills.Python:
                return "";
            case Skills.CSS:
                return "#2071fe";
            case Skills.HTML:
                return "#ff3300";
            case Skills.Sass:
                return "";
            case Skills.React:
                return "#61DBFB";
            case Skills.Astro:
                return "#FF3E00";
            case Skills.VSCode:
                return "#007ACC";
            case Skills.Git:
                return "#F34F29";
            case Skills.GitHub:
                return "#eee";
            case Skills.MySQL:
                return "#FFD700";
            case Skills.MongoDB:
                return "#47A248";
            case Skills.REST:
                return "#FF5733";
            default:
                return "#0"
        }
    }
    export function link(s: Skills): string {
        switch (s) {
            case Skills.C:
                return undefined;
            case Skills.Cpp:
                return undefined;
            case Skills.Rust:
                return undefined;
            case Skills.TypeScript:
                return "https://www.typescriptlang.org";
            case Skills.Java:
                return undefined;
            case Skills.JavaScript:
                return undefined;
            case Skills.Csharp:
                return undefined;
            case Skills.Python:
                return undefined;
            case Skills.CSS:
                return undefined;
            case Skills.HTML:
                return undefined;
            case Skills.Sass:
                return undefined;
            case Skills.React:
                return "https://react.dev";
            case Skills.Astro:
                return "https://astro.build";
            case Skills.VSCode:
                return "https://code.visualstudio.com";
            case Skills.Git:
                return "https://git-scm.com";
            case Skills.GitHub:
                return "https://github.com";
            case Skills.MySQL:
                return "https://www.mysql.com";
            case Skills.MongoDB:
                return "https://www.mongodb.com";
            case Skills.REST:
                return undefined;
            default:
                return undefined;
        }
    }
    export function icon(s: Skills): string {
        switch (s) {
            case Skills.C:
                return "";
            case Skills.Cpp:
                return "";
            case Skills.Rust:
                return "";
            case Skills.TypeScript:
                return "lni lni-typescript";
            case Skills.Java:
                return "";
            case Skills.JavaScript:
                return "fab fa-js";
            case Skills.Csharp:
                return "";
            case Skills.Python:
                return "";
            case Skills.CSS:
                return "fab fa-css3-alt";
            case Skills.HTML:
                return "fab fa-html5";
            case Skills.Sass:
                return "fab fa-sass";
            case Skills.React:
                return "fab fa-react";
            case Skills.Astro:
                return "fas fa-rocket";
            case Skills.VSCode:
                return "lni lni-vs-code";
            case Skills.Git:
                return "fab fa-git-alt";
            case Skills.GitHub:
                return "fab fa-github";
            case Skills.MySQL:
                return "lni lni-mysql";
            case Skills.MongoDB:
                return "lni lni-mongodb";
            case Skills.REST:
                return "fas fa-network-wired";
            default:
                return "";
        }
    }
    export function name(s: Skills): string {
        switch (s) {
            case Skills.C:
                return "C";
            case Skills.Cpp:
                return "C++";
            case Skills.Rust:
                return "Rust";
            case Skills.TypeScript:
                return "TypeScript";
            case Skills.Java:
                return "Java";
            case Skills.JavaScript:
                return "JavaScript";
            case Skills.Csharp:
                return "C#";
            case Skills.Python:
                return "Python";
            case Skills.CSS:
                return "CSS";
            case Skills.HTML:
                return "HTML";
            case Skills.Sass:
                return "Sass";
            case Skills.React:
                return "React";
            case Skills.Astro:
                return "Astro";
            case Skills.VSCode:
                return "VS Code";
            case Skills.Git:
                return "Git";
            case Skills.GitHub:
                return "GitHub";
            case Skills.MySQL:
                return "MySQL";
            case Skills.MongoDB:
                return "MongoDB";
            case Skills.REST:
                return "REST";
            default:
                return "undefined";
        }
    }
}

export enum ProjectTags {
    FullStack,
    FrontEnd,
    BackEnd,
    OpenSource,
    ClosedSource
};

export namespace ProjectTags {
    export function string(s: ProjectTags): string {
        switch (s) {
            case ProjectTags.FullStack:
                return "Full-Stack";
            case ProjectTags.FrontEnd:
                return "Front-End";
            case ProjectTags.BackEnd:
                return "Back-End";
            case ProjectTags.OpenSource:
                return "Open-Source";
            case ProjectTags.ClosedSource:
                return "Closed-Source";
            default:
                return "undefined";
        }
    }
}

export interface Project {
    name: string,
    tags: ProjectTags[],
    technologies: Skills[],
    preview?: string,
    desc?: string
};

//TODO: add contributions

export interface Config {
    url?: string,
    name: string,
    skills: {
        back_end: Skills[],
        front_end: Skills[],
        tech: Skills[],
        other: Skills[]
    },
    projects: Project[],
    introduction?: string,
    links?: {
        github?: string,
        email?: string,
        discord?: string
    },
    typewrite_words?: string[]
};