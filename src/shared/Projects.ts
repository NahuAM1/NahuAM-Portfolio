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
    image: 'https://i.postimg.cc/3whB45T2/Sin-t-tulo.png',
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
    technologies: 'NextJS, React, Tailwind, TypeScript, Firebase',
    demo: 'https://clickmenu.ai',
    repository: null,
  },
  {
    name: 'Personal Wallet',
    description:
      'Este proyecto comenzó como un experimento creando una wallet de finanzas personales con v0.dev y Supabase. Lo que al principio fue un prototipo generado en minutos fue evolucionando con el tiempo gracias a iteraciones continuas y al uso de asistentes de codificación agéntica para mejorar su arquitectura y funcionalidades.\n Hoy la aplicación ya no es solo una prueba de concepto. Incorpora gestión de gastos con tarjetas de crédito (cierres y vencimientos), seguimiento de financiaciones e inversiones, dashboard de mercado en tiempo real, metas de ahorro y sistema de roles de usuario.\n Además, integra una capa de inteligencia artificial que permite cargar gastos automáticamente mediante fotos de tickets, generar recomendaciones basadas en los últimos consumos, dividir gastos compartidos y contar con un agente financiero 24/7 para analizar, proyectar y optimizar decisiones.\n La experiencia confirma que el verdadero diferencial ya no está únicamente en escribir código, sino en saber diseñar buena arquitectura y orquestar herramientas, servicios e inteligencia artificial para transformar una idea en un producto robusto y escalable.',
    image: 'https://i.postimg.cc/QtNKYzwg/Sin-titulo.png',
    year: '2025',
    role: 'Prompt Engineer',
    technologies: 'v0.dev, ChatGPT, Supabase',
    demo: 'https://personal-finance-wallet.vercel.app',
    repository: 'https://github.com/NahuAM1/personal-finance-app',
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
