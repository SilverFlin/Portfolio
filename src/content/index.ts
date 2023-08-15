import { getLabel } from "@/models/TechnologyLabels";
import type { Article, MarkdownResponse, TechnologyLabel } from "@/types";



async function getAllArticles(): Promise<Article[]> {
    const articleFiles = import.meta.glob('@/content/articles/*.md');
    const articles: Article[] = [];
    for (const key in articleFiles) {
        await articleFiles[key]()
            .then((res) => {
                const markdownResponse = res as MarkdownResponse;
                const component = markdownResponse.default;
                const { id, description, date, title, imageName } = markdownResponse;

                const rawTags = markdownResponse.rawTags;
                const tags: TechnologyLabel[] = []
                rawTags.forEach((tag) => {
                    try {
                        tags.push(getLabel(tag))
                    } catch (e) {
                        console.error(e)
                    }
                })

                articles.push({
                    id,
                    title,
                    date: new Date(date),
                    component,
                    description,
                    tags,
                    imageName
                })
            })
    }

    articles.sort((a, b) => {
        return a.date.getTime() - b.date.getTime();
    })

    return new Promise((resolve, reject) => {
        if (articles.length === 0) {
            reject('No articles found');
        } else {
            resolve(articles);
        }
    })

}

async function getArticleById(id: string): Promise<Article> {
    let article: Article | null = null;
    await getAllArticles()
        .then((articles) => {
            for (const a of articles) {
                if (a.id === id) {
                    article = a;
                    break;
                }
            }
        })

    return new Promise((resolve, reject) => {
        if (article) {
            resolve(article)
        } else {
            reject("Article not found")
        }
    })

}


export {
    getAllArticles,
    getArticleById
}