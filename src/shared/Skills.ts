export interface Skill {
  name: string;
  description: string;
  img: string;
}

const skills: Skill[] = [
  {
    name: 'Python',
    description:
      'Python es un lenguaje de programación interpretado, de alto nivel y de propósito general.',
    img: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/psf/trademarks-faq/python-logo-monochrome.png',
  },
  {
    name: 'Java',
    description:
      'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos.',
    img: 'https://cdn0.iconfinder.com/data/icons/huge-basic-icons-part-3/512/Java.png',
  },
  {
    name: 'Spring Boot',
    description:
      'Spring Boot es un framework para desarrollar aplicaciones Java de manera rápida y con un mínimo de configuración.',
    img: 'https://static-00.iconduck.com/assets.00/spring-boot-icon-512x511-pza8zvqu.png',
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web interactivas.',
    img: 'https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png',
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript.',
    img: 'https://cdn-icons-png.freepik.com/512/5968/5968566.png',
  },
  {
    name: 'Nest JS',
    description:
      'Nest. js es un framework de desarrollo web basado en Node. js que utiliza TypeScript para proporcionar una estructura de programación sólida y altamente escalable.',
    img: 'https://www.svgrepo.com/show/306460/nestjs.svg',
  },
  {
    name: 'Next JS',
    description:
      'Next.js es un framework de React que permite crear aplicaciones web y sitios web estáticos. Este ofrece las herramientas y la configuración necesarias para React, y proporciona estructura, funciones y optimizaciones adicionales para la aplicación mediante sus lados de Cliente y Servidor.',
    img: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-x6n5t31i.png',
  },
  {
    name: 'HTML',
    description:
      'HTML es el lenguaje de marcado estándar para crear páginas web.',
    img: 'https://cdn-icons-png.freepik.com/256/1051/1051328.png?ga=GA1.1.1399714531.1739455553&semt=ais_hybrid',
  },
  {
    name: 'CSS',
    description:
      'CSS es un lenguaje de diseño utilizado para estilizar la presentación de documentos HTML.',
    img: 'https://cdn-icons-png.freepik.com/256/732/732007.png?ga=GA1.1.1399714531.1739455553&semt=ais_hybrid',
  },
  {
    name: 'Sass',
    description:
      'Sass es una extensión de CSS que agrega características como variables, anidamiento y mixins, lo que facilita la escritura y mantenimiento de estilos CSS.',
    img: 'https://cdn-icons-png.freepik.com/512/5968/5968550.png',
  },
  {
    name: 'TailWind',
    description:
      'Tailwind CSS es un framework de CSS de código abierto que permite crear interfaces de usuario personalizadas. Se basa en clases de utilidad que se pueden combinar para dar estilo a los elementos.',
    img: 'https://static-00.iconduck.com/assets.00/tailwind-icon-2048x1233-8s7iwqun.png',
  },
  {
    name: 'React',
    description:
      'React es una biblioteca de JavaScript para construir interfaces de usuario.',
    img: 'https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png',
  },
  {
    name: 'SQL',
    description:
      'SQL es un lenguaje utilizado para interactuar con bases de datos relacionales.',
    img: 'https://www.shareicon.net/download/2015/10/24/660964_database_512x512.png',
  },
  {
    name: 'Firebase',
    description:
      'Firebase es una plataforma de Google que ayuda a desarrollar aplicaciones web y móviles. Ofrece una infraestructura administrada, herramientas de asistencia de IA y SDK multiplataforma.',
    img: 'https://static-00.iconduck.com/assets.00/firebase-icon-371x512-vqyog6a5.png',
  },
  {
    name: 'GIT',
    description:
      'Git es un sistema de control de versiones distribuido que facilita el seguimiento de los cambios en el código fuente.',
    img: 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png',
  },
];

export { skills };
