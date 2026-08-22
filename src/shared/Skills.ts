export interface Skill {
  name: string;
  description: string;
  img: string;
}

/**
 * Single icon source for every skill.
 *
 * These logos previously came from seven different hosts, and the seven
 * served by iconduck.com had stopped resolving, so their chips rendered a
 * broken-image glyph. Pinning one CDN keeps the set visually consistent
 * and makes a future move a one-line change.
 */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skills: Skill[] = [
  {
    name: 'Python',
    description:
      'Python es un lenguaje de programación interpretado, de alto nivel y de propósito general.',
    img: `${DEVICON}/python/python-original.svg`,
  },
  {
    name: 'Java',
    description:
      'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos.',
    img: `${DEVICON}/java/java-original.svg`,
  },
  {
    name: 'Spring Boot',
    description:
      'Spring Boot es un framework para desarrollar aplicaciones Java de manera rápida y con un mínimo de configuración.',
    img: `${DEVICON}/spring/spring-original.svg`,
  },
  {
    name: 'C#',
    description:
      'C# es un lenguaje de programación multiparadigma desarrollado por Microsoft, orientado a objetos y ampliamente utilizado en aplicaciones empresariales sobre la plataforma .NET.',
    img: `${DEVICON}/csharp/csharp-original.svg`,
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web interactivas.',
    img: `${DEVICON}/javascript/javascript-original.svg`,
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript.',
    img: `${DEVICON}/typescript/typescript-original.svg`,
  },
  {
    name: 'Nest JS',
    description:
      'Nest. js es un framework de desarrollo web basado en Node. js que utiliza TypeScript para proporcionar una estructura de programación sólida y altamente escalable.',
    img: `${DEVICON}/nestjs/nestjs-original.svg`,
  },
  {
    name: 'Next JS',
    description:
      'Next.js es un framework de React que permite crear aplicaciones web y sitios web estáticos. Este ofrece las herramientas y la configuración necesarias para React, y proporciona estructura, funciones y optimizaciones adicionales para la aplicación mediante sus lados de Cliente y Servidor.',
    img: `${DEVICON}/nextjs/nextjs-original.svg`,
  },
  {
    name: 'HTML',
    description:
      'HTML es el lenguaje de marcado estándar para crear páginas web.',
    img: `${DEVICON}/html5/html5-original.svg`,
  },
  {
    name: 'CSS',
    description:
      'CSS es un lenguaje de diseño utilizado para estilizar la presentación de documentos HTML.',
    img: `${DEVICON}/css3/css3-original.svg`,
  },
  {
    name: 'Sass',
    description:
      'Sass es una extensión de CSS que agrega características como variables, anidamiento y mixins, lo que facilita la escritura y mantenimiento de estilos CSS.',
    img: `${DEVICON}/sass/sass-original.svg`,
  },
  {
    name: 'TailWind',
    description:
      'Tailwind CSS es un framework de CSS de código abierto que permite crear interfaces de usuario personalizadas. Se basa en clases de utilidad que se pueden combinar para dar estilo a los elementos.',
    img: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  },
  {
    name: 'React',
    description:
      'React es una biblioteca de JavaScript para construir interfaces de usuario.',
    img: `${DEVICON}/react/react-original.svg`,
  },
  {
    name: 'Vue',
    description:
      'Vue.js es un framework de JavaScript de código abierto que se utiliza para crear interfaces de usuario (UI) y aplicaciones web.',
    img: `${DEVICON}/vuejs/vuejs-original.svg`,
  },
  {
    name: 'SQL',
    description:
      'SQL es un lenguaje utilizado para interactuar con bases de datos relacionales.',
    // devicon has no generic "SQL" icon, only per-engine ones. MySQL was
    // chosen deliberately: it lines up with the MariaDB work in the
    // current role and reads as "relational database" at a glance.
    img: `${DEVICON}/mysql/mysql-original.svg`,
  },
  {
    name: 'PostgreSQL',
    description:
      'PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto, reconocido por su robustez, extensibilidad y cumplimiento del estándar SQL.',
    img: `${DEVICON}/postgresql/postgresql-original.svg`,
  },
  {
    name: 'MongoDB',
    description:
      'MongoDB es una base de datos NoSQL orientada a documentos, que almacena la información en estructuras flexibles similares a JSON.',
    img: `${DEVICON}/mongodb/mongodb-original.svg`,
  },
  {
    name: 'AWS',
    description:
      'Amazon Web Services es la plataforma de servicios en la nube de Amazon, utilizada para desplegar, escalar y operar aplicaciones e infraestructura.',
    img: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  {
    name: 'Docker',
    description:
      'Docker es una plataforma de contenedores que permite empaquetar una aplicación junto a sus dependencias, garantizando que se ejecute igual en cualquier entorno.',
    img: `${DEVICON}/docker/docker-original.svg`,
  },
  {
    name: 'Firebase',
    description:
      'Firebase es una plataforma de Google que ayuda a desarrollar aplicaciones web y móviles. Ofrece una infraestructura administrada, herramientas de asistencia de IA y SDK multiplataforma.',
    img: `${DEVICON}/firebase/firebase-plain.svg`,
  },
  {
    name: 'GIT',
    description:
      'Git es un sistema de control de versiones distribuido que facilita el seguimiento de los cambios en el código fuente.',
    img: `${DEVICON}/git/git-original.svg`,
  },
];

export { skills };
