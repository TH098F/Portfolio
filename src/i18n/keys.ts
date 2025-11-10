import config from "../../config/config";

export const defaultLanguage = "en";

export const keys = {
    en: {
        "title": `${config.name}'s Portfolio`,

        "header.aboutme": "About Me",
        "header.projects": "Projects",
        "header.resume": "Resume",
        "header.github": "Visit on GitHub",
        "header.email": "Get In Touch",

        "index.hello": "Hello I'm",
        "index.introduction.title": "About me:",
        "index.introduction.text": (await import("../../localization/en/introduction.md")).compiledContent(),
        "index.afterword": (await import("../../localization/en/afterword.md")).compiledContent(),

        "index.frontend": "Frontend Skills",
        "index.backend": "Backend Skills",
        "index.tech": "Tech Skills",
        "index.other": "Other Skills",                    

        "projects.builtWith": "Built With:",
        "projects.readAll": "Read All",
        "projects.github": "Github",
        "projects.livePreview": "Live Preview",
    },
    de: {
        "title": `${config.name}'s Portfolio`,

        "header.aboutme": "About Me",
        "header.projects": "Projekte",
        "header.resume": "Resume",
        "header.github": "GitHub",
        "header.email": "Email",

        "index.hello": "Hallo ich bin",
        "index.introduction.title": "Über mich:",
        "index.introduction.text": (await import("../../localization/de/introduction.md")).compiledContent(),
        "index.afterword": (await import("../../localization/de/afterword.md")).compiledContent(),

        "index.frontend": "Frontend",
        "index.backend": "Backend",
        "index.tech": "Technologien",
        "index.other": "Andere",

        "projects.builtWith": "Gemacht mit:",
        "projects.readAll": "Weiter lesen",
        "projects.github": "Github",
        "projects.livePreview": "Live Preview",
    }
} as const;