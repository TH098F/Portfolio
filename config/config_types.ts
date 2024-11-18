enum Skills {
    C, Cpp, Rust, TypeScript, Java, JavaScript, Csharp, Python,
    CSS, HTML, Sass,
    React, Astro, 
    VSCode, Git, GitHub,
    MySQL, MongoDB, REST
};

enum ProjectTags {
    FullStack,
    FrontEnd,
    BackEnd,
    OpenSource,
    ClosedSource
};

type Project = {
    name: string,
    tags: ProjectTags[],
    technology: Skills[],
    preview?: string,
    desc?: string
};

//TODO: add contributions

type Config = {
    url: string,
    skills: {
        back_end: Skills[],
        front_end: Skills[],
        tech: Skills[],
        other: Skills[]
    },
    projects: Project[],
    introduction?: string
}