export interface Project {
  name: string;
  description: string;
  image: string;
  year: string;
  role: string;
  technologies: string;
  demo: string | null;
  repository: string | null;
}

const projects: Project[] = [
  {
    name: 'Gestión de Modulo Sanitario (GMS)',
    description:
      'Proyecto Final de la carrera de Ingenieria en Sitemas de Información. Plataforma de gestión para la ONG Módulo Sanitario. Permite la planificación, análisis, asignación, construcción y control de módulos sanitarios para familias de bajos recursos de la ciudad de Córdoba. Incluyendo la generación de formularios, reportes, métricas para la toma de decisiones gestión de agenda y mapa interactivo.',
    image: 'https://i.postimg.cc/pV3zSW-P2/Proyecto-GMS.png',
    year: '2024',
    role: 'Desarrollador Back-End y DevOps & Cloud',
    technologies: 'NestJS, React, Auth0, TypeScript, AWS y Github Actions',
    demo: null,
    repository: null,
  },
  {
    name: 'Click Menu',
    description:
      'Click Menu fue un producto desarrollado para un cliente en Portugal en el que trabajé durante mis pasantías en Tech House. Mi trabajo en este proyecto incluyó la implementación del Servicio de Mailing para el soporte a usuarios, la creación y restablecimiento de cuentas, la Traducción de la Landing Page y diversas tareas de Desarrollo Front-End.',
    image: 'https://i.postimg.cc/50TfZMgh/image.png',
    year: '2025',
    role: 'Desarrollador Front-End',
    technologies: 'NextJS, React, Tailwind, TypeScript',
    demo: 'https://clickmenu.ai/en/landing',
    repository: null,
  },
  {
    name: 'Gym App',
    description:
      'Este proyecto es una aplicacion que permite la gestion de clientes, pases y empleados de un gimnasio',
    image: 'https://i.postimg.cc/DyXVsh1w/Sin-t-tulo.png',
    year: '2023',
    role: 'Desarrollador Full-Stack',
    technologies: 'JavaScript, React y Java-SpringBoot',
    demo: null,
    repository: 'https://github.com/NahuAM1/gymapp',
  },
  {
    name: 'Coffee Listing',
    description:
      'Este proyecto es un catalago de cafés el cual consume los datos de una API y muestra los cafés populares, los puntajes dados por la gente, los disponibes, etc.',
    image: 'https://i.postimg.cc/25z82yxw/Sin-t-tulo.png',
    year: '2024',
    role: 'Desarrollador Front-End',
    technologies: 'TypeScript, React, Sass y Vercel',
    demo: 'https://simple-coffee-listing-pied.vercel.app',
    repository: 'https://github.com/NahuAM1/Simple-Coffee-Listing',
  },
  {
    name: 'Portfolio Personal',
    description:
      'Por último, dejo el repositorio de este portafolio personal para observar la arquitectura del proyecto y las tecnologías.',
    image: 'https://i.postimg.cc/7hy67Hxg/Sin-t-tulo.png',
    year: '2024',
    role: 'Desarrollador Front-End',
    technologies: 'TypeScript, React, Vite, Sass y Vercel',
    demo: null,
    repository: 'https://github.com/NahuAM1/NahuAM-Portfolio',
  },
];

export { projects };
