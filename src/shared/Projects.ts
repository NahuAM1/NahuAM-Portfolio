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
      'Proyecto final de la carrera de Ingeniería en Sistemas de Información, defendido con una calificación de 10.\nPlataforma de gestión para la ONG Módulo Sanitario, que trabaja sobre la emergencia habitacional y sanitaria que afecta a más de 6 millones de personas en Argentina. El sistema permite planificar, analizar, asignar, construir y controlar módulos sanitarios para familias de bajos recursos de Córdoba.\nIncluye módulos públicos y privados, generación de formularios, gestión de archivos, reportes y métricas para la toma de decisiones, agenda y mapa interactivo. El objetivo fue liberar a la organización de la carga administrativa para que pueda enfocarse en acompañar a las familias.',
    image: 'https://i.postimg.cc/3whB45T2/Sin-t-tulo.png',
    year: '2024',
    role: 'Desarrollador Back-End y DevOps & Cloud',
    technologies:
      'NestJS, React, MongoDB, TypeScript, Docker, Auth0, AWS y GitHub Actions',
    demo: 'https://gmscordoba.com.ar/',
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
      'Nació como un experimento con v0.dev y Supabase: un prototipo de wallet de finanzas personales generado en minutos. Tras meses de iteración con asistentes de codificación agéntica, dejó de ser una prueba de concepto para convertirse en un producto completo.\nHoy incluye gestión de gastos con tarjetas de crédito (cierres y vencimientos), seguimiento de inversiones, dashboard de mercado en tiempo real, metas de ahorro y sistema de roles de usuario.\nSobre esa base sumé una capa de inteligencia artificial: carga automática de gastos a partir de la foto del ticket, recomendaciones de compra basadas en el análisis de los últimos 50 tickets, divisor de gastos compartidos y un agente financiero disponible 24/7 para analizar, proyectar y optimizar decisiones.\nLa conclusión que me dejó: el diferencial ya no está en la cantidad de código que escribís, sino en diseñar buena arquitectura y orquestar herramientas, servicios e IA para que un prototipo se sostenga como producto real.',
    image: 'https://i.postimg.cc/QtNKYzwg/Sin-titulo.png',
    year: '2025',
    role: 'Arquitectura y desarrollo asistido por IA',
    technologies:
      'Next.js, Supabase, v0.dev, IA generativa, agentes de codificación y Vercel',
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
