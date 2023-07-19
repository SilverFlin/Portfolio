import type { ArticleCardProps } from '@/types/index';
import {
    TypeScriptTechnologyLabel,
    VueTechnologyLabel,
    TailwindTechnologyLabel,
    HTMLTechnologyLabel,
    CSSTechnologyLabel,
    JavaTechnologyLabel,
    JavaScriptTechnologyLabel
} from '@/models/TechnologyLabels';

const articleCards: ArticleCardProps[] = [
    {
        id: 1,
        title: "How to use TypeScript with Vue.js",
        description: "This article will teach you how to use TypeScript with Vue.js.",
        date: new Date("2021-07-02"),
        imageName: "typescript-with-vuejs.jpeg",
        tags: [TypeScriptTechnologyLabel, VueTechnologyLabel]
    },
    {
        id: 2,
        title: "How to use Tailwind CSS with Vue.js",
        description: "This article will teach you how to use Tailwind CSS with Vue.js.",
        date: new Date("2021-06-02"),
        imageName: "tailwind-with-vuejs.jpeg",
        tags: [TailwindTechnologyLabel, VueTechnologyLabel]
    }
]

export default articleCards;