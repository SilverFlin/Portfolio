import type { ArticleCodeContent, ArticleImageContent, ArticleTextContent, ArticleTitleContent, ArticleViewProps, ProjectCardProps, ProjectViewProps } from "@/types";
import { CSSTechnologyLabel, HTMLTechnologyLabel, JavaScriptTechnologyLabel, JavaTechnologyLabel, MongoDBTechnologyLabel, TailwindTechnologyLabel, TypeScriptTechnologyLabel, VueTechnologyLabel } from "./TechnologyLabels";


const projectMap: Map<number, ProjectViewProps> = new Map();

projectMap.set(1, {
    id: 1,
    name: "Portfolio Website",
    description: "This website was built using Vue.js, TypeScript, and Tailwind CSS.",
    date: new Date("2023-07-02"),
    imageName: "portfolio-website.jpeg",
    technologies: [VueTechnologyLabel, TypeScriptTechnologyLabel, TailwindTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel],
    projectExperience: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectIntention: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectChallenges: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectSolutions: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectResults: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
})

projectMap.set(2, {
    id: 2,
    name: "Strix",
    description: "Strix is a web application built with Java, HTML, CSS, JavaScript, and Love.",
    date: new Date("2023-06-02"),
    imageName: "strix.jpg",
    technologies: [JavaTechnologyLabel, MongoDBTechnologyLabel, JavaScriptTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel],
    projectExperience: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectIntention: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectChallenges: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectSolutions: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
    projectResults: {
        type: 'text',
        text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
    } as ArticleTextContent,
})


function getProjectById(id: number): ProjectViewProps | undefined {
    return projectMap.get(id);
}

function getProjectCards(): ProjectCardProps[] {
    const projectCardList: ProjectCardProps[] = [];
    projectMap.forEach((project) => {
        projectCardList.push({
            id: project.id,
            name: project.name,
            description: project.description,
            date: project.date,
            imageName: project.imageName,
            technologies: project.technologies
        });
    })
    return projectCardList;
}

export {
    getProjectById,
    getProjectCards
};