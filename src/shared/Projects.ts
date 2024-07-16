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
        image: "https://i.postimg.cc/25z82yxw/Sin-t-tulo.png",
        year: "2024",
        role: "Desarrollador Front-End",
        technologies: "TypeScript, React, Sass",
    },{
        name: "Gym App",
        description: "Este projecto es una aplicacion que permite la gestion de clientes, pases y empleados de un gimnasio",
        image: "https://i.postimg.cc/DyXVsh1w/Sin-t-tulo.png",
        year: "2023",
        role: "Desarrollador Full-Stack",
        technologies: "JavaScript, React, Java-SpringBoot",
    },
]

export{ projects }
