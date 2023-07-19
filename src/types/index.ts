type TestimonialCardProps = {
    id: number;
    name: string;
    title: string;
    company: string;
    message: string;
    imageName?: string;
    isActive: boolean;
}

type ProjectCardProps = {
    id: number;
    name: string;
    description: string;
    date: Date;
    imageName: string;
    technologies: TechnologyLabel[];
}

type ArticleCardProps = {
    id: number;
    title: string;
    description: string;
    date: Date;
    imageName: string;
    tags: TechnologyLabel[];
}

type TechnologyLabel = {
    name: string;
    color: string;
}



export type {
    TestimonialCardProps,
    ProjectCardProps,
    TechnologyLabel,
    ArticleCardProps
}