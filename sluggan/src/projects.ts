// Shape of each project in src/generated/projects.ts (built from content/projekt/).
export interface ProjectImage {
    src: string;
    srcset: string;
    width: number;
    height: number;
}

export interface Project {
    slug: string;
    title: string;
    summary: string;
    client: string;
    kind: string;
    year: string;
    role: string;
    tech: string[];
    link: string;
    cover: ProjectImage | null;
    ogImage: string;
    /** Rendered from the Markdown body at build time; trusted content from the repo. */
    html: string;
}

export const projectUrl = (p: Project) => `/projekt/${p.slug}/`;
