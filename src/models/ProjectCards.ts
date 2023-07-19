import type { ProjectCardProps } from "@/types";
import {
    TypeScriptTechnologyLabel,
    VueTechnologyLabel,
    TailwindTechnologyLabel,
    HTMLTechnologyLabel,
    CSSTechnologyLabel,
    JavaTechnologyLabel,
    JavaScriptTechnologyLabel
} from "@/models/TechnologyLabels";


const projectCards: ProjectCardProps[] = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "This website was built using Vue.js, TypeScript, and Tailwind CSS.",
        date: new Date("2023-07-02"),
        imageName: "portfolio-website.jpeg",
        technologies: [TypeScriptTechnologyLabel, VueTechnologyLabel, TailwindTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel, CSSTechnologyLabel]
    },
    {
        id: 2,
        name: "Strix",
        description: "Strix is a web application built with Java, HTML, CSS, JavaScript, and Love.",
        date: new Date("2023-06-02"),
        imageName: "strix.jpg",
        technologies: [JavaTechnologyLabel, JavaScriptTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel]
    }
]

export default projectCards;