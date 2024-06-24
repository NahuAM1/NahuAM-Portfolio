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
        image: "https://i.ibb.co/xmQPfwM/cofee-listing.png",
        year: "2024",
        role: "Desarrollador Front-End",
        technologies: "TypeScript, React, Sass",
    },
]

export{ projects }
