enum Skills {
    C, Cpp, Rust, TypeScript, Java, JavaScript, Csharp,
    VSCode, Git, GitHub 
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
    tags: Array[ProjectTags],
    technology: Array[Skills],
    preview?: string,
    desc?: string
};

type Config = {
    url: string,
    skills: {
        back_end: Array[Skills],
        front_end: Array[Skills],
        tech: Array[Skills],
        other: Array[Skills]
    },
    projects: Array[Project]
}