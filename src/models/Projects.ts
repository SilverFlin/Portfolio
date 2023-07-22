import type { ArticleCodeContent, ArticleImageContent, ArticleTextContent, ArticleTitleContent, ArticleViewProps, ProjectCardProps, ProjectViewProps } from "@/types";
import { CSSTechnologyLabel, HTMLTechnologyLabel, JavaScriptTechnologyLabel, JavaTechnologyLabel, MongoDBTechnologyLabel, TailwindTechnologyLabel, TypeScriptTechnologyLabel, VueTechnologyLabel } from "./TechnologyLabels";


const projectMap: Map<number, ProjectViewProps> = new Map();

projectMap.set(1, {
    id: 1,
    name: "Portfolio Website",
    description: "This is my Personal Portfolio Website. It serves as a window to showcase my projects and thought process on each one of them. It was built using Vue.js, TypeScript, and Tailwind CSS. Without external components, just me.",
    date: new Date("2023-07-02"),
    imageName: "portfolio-website.jpeg",
    technologies: [VueTechnologyLabel, TypeScriptTechnologyLabel, TailwindTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel],
    projectExperience: {
        type: 'text',
        text: 'The integration of the stack of technologies that I used, i.e., VueJS, TS, and Tailwind CSS, made all the process smooth, I really enjoy how Vue make you structure the code (if you are using the composition API), and the way that you could work with the tailwind classes are just delightful.',
    } as ArticleTextContent,
    projectIntention: {
        type: 'text',
        text: 'The main intention of this is to showcase my projects to the public and to add an enjoyable element to the process of documenting how I achieved each one. This serves not only my future self, but also for those who are interested in replicating similar projects. I have this idea of learning through application, I fell into the typical cycle of endless courses (as you could see on the about me / certifications section). However, I decided to stop this and instead start applying the technologies that I am learning. It is also way more fun.',
    } as ArticleTextContent,
    projectChallenges: {
        type: 'text',
        text: 'At the start, some components were hard to imagine how would I make them, especially the carousel on the home view. I just tried to figure it out and applied it to see how it behaves. It worked exactly as I wanted! Yay! It still lacks responsiveness with mobile devices, which is something that will be addressed in the next version. I also want more feedback to prioritize all the changes and improvements to be made.',
    } as ArticleTextContent,
    projectResults: {
        type: 'text',
        text: 'The page is now running, and I am really satisfied with the result, it was a great experience, I learned a lot. There\'s still some work to do, and that\'s exciting.',
    } as ArticleTextContent,
})

// projectMap.set(2, {
//     id: 2,
//     name: "Strix",
//     description: "Strix is a web application built with Java, HTML, CSS, JavaScript, and Love.",
//     date: new Date("2023-06-02"),
//     imageName: "strix.jpg",
//     technologies: [JavaTechnologyLabel, MongoDBTechnologyLabel, JavaScriptTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel],
//     projectExperience: {
//         type: 'text',
//         text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
//     } as ArticleTextContent,
//     projectIntention: {
//         type: 'text',
//         text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
//     } as ArticleTextContent,
//     projectChallenges: {
//         type: 'text',
//         text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
//     } as ArticleTextContent,
//     projectSolutions: {
//         type: 'text',
//         text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
//     } as ArticleTextContent,
//     projectResults: {
//         type: 'text',
//         text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
//     } as ArticleTextContent,
// })


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