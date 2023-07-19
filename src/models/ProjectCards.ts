import type { ProjectCardProps, TechnologyLabel } from "@/types";

const JavaTechnologyLabel: TechnologyLabel = {
    name: "Java",
    color: "#ED8B00"
}

const JavaScriptTechnologyLabel: TechnologyLabel = {
    name: "JavaScript",
    color: "#F7DF1E"
}

const TypeScriptTechnologyLabel: TechnologyLabel = {
    name: "TypeScript",
    color: "#007ACC"
}

const VueTechnologyLabel: TechnologyLabel = {
    name: "Vue.js",
    color: "#4FC08D"
}

const TailwindTechnologyLabel: TechnologyLabel = {
    name: "Tailwind CSS",
    color: "#38B2AC"
}

const HTMLTechnologyLabel: TechnologyLabel = {
    name: "HTML",
    color: "#E34F26"
}

const CSSTechnologyLabel: TechnologyLabel = {
    name: "CSS",
    color: "#1572B6"
}

const projectCards: ProjectCardProps[] = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "This website was built using Vue.js, TypeScript, and Tailwind CSS.",
        date: new Date("2023-07-0"),
        imageName: "portfolio-website.jpeg",
        technologies: [TypeScriptTechnologyLabel, VueTechnologyLabel, TailwindTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel, CSSTechnologyLabel]
    },
    {
        id: 2,
        name: "Strix",
        description: "Strix is a web application built with Java, HTML, CSS, JavaScript, and Love.",
        date: new Date("2023-06-01"),
        imageName: "strix.jpg",
        technologies: [JavaTechnologyLabel, JavaScriptTechnologyLabel, HTMLTechnologyLabel, CSSTechnologyLabel]
    }
]

export default projectCards;