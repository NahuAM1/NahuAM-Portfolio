export interface Project{
    name: string,
    description: string,
    image: string,
    year: string,
    role: string,
    technologies: string,
}

const projects: Project[] = [
    {
        name: "Coffee Listing",
        description: "Este projecto es un catalago de cafés el cual consume los datos de una API y muestra los cafés populares, los puntajes dados por la gente, los disponibes, etc.",
        image: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_CGvxQZtZ5doawsgtuseT41HuNHhG%26teamId%3Dnahuam1s-projects%26withStatus%3D1&w=640&q=75&dpl=dpl_EDkyhZo9HTaxz1VvX8bbwEi2dxCm",
        year: "2024",
        role: "Desarrollador Front-End",
        technologies: "TypeScript, React, Sass",
    },
]

export{ projects }