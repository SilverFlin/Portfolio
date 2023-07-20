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

type ArticleViewProps = {
    id: number;
    title: string;
    description: string;
    content: ArticleContent[];
    date: Date;
    tags: TechnologyLabel[];
}

interface ArticleContent {
    type: 'image' | 'text' | 'code';
}

interface ArticleImageContent extends ArticleContent {
    type: 'image';
    url: string;
    description: string;
}

interface ArticleTextContent extends ArticleContent {
    type: 'text';
    text: string;
}

interface ArticleCodeContent extends ArticleContent {
    type: 'code';
    code: string;
    language: string;
}





export type {
    TestimonialCardProps,
    ProjectCardProps,
    TechnologyLabel,
    ArticleCardProps,
    ArticleViewProps,
    ArticleContent,
    ArticleImageContent,
    ArticleTextContent,
    ArticleCodeContent
}