import type { ArticleCodeContent, ArticleImageContent, ArticleTextContent, ArticleViewProps } from "@/types";
import { JavaScriptTechnologyLabel } from "./TechnologyLabels";

const articles: ArticleViewProps[] = [
    {
        id: 1,
        title: 'Article 1',
        description: 'Description 1',
        content: [
            {
                type: 'image',
                url: 'https://picsum.photos/200/300',
                description: 'Image 1'
            } as ArticleImageContent,
            {
                type: 'text',
                text: 'Text 1'
            } as ArticleTextContent,
            {
                type: 'code',
                code: 'Code 1',
                language: 'javascript'
            } as ArticleCodeContent
        ],
        date: new Date(),
        tags: [JavaScriptTechnologyLabel]
    }
]


export default articles;