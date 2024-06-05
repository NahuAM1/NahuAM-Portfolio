export interface Skill {
    name: string;
    description: string;
  }
  
  const skills: Skill[] = [
    {
      name: "Python",
      description:
        "Python es un lenguaje de programación interpretado, de alto nivel y de propósito general.",
    },
    {
      name: "Java",
      description:
        "Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos.",
    },
    {
      name: "Spring Boot",
      description:
        "Spring Boot es un framework para desarrollar aplicaciones Java de manera rápida y con un mínimo de configuración.",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web interactivas.",
    },
    {
      name: "TypeScript",
      description:
        "TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript.",
    },
    {
      name: "HTML",
      description:
        "HTML es el lenguaje de marcado estándar para crear páginas web.",
    },
    {
      name: "CSS",
      description:
        "CSS es un lenguaje de diseño utilizado para estilizar la presentación de documentos HTML.",
    },
    {
        name: "Sass",
        description:
          "Sass es una extensión de CSS que agrega características como variables, anidamiento y mixins, lo que facilita la escritura y mantenimiento de estilos CSS.",
    },  
    {
      name: "React",
      description:
        "React es una biblioteca de JavaScript para construir interfaces de usuario.",
    },
    {
      name: "SQL",
      description:
        "SQL es un lenguaje utilizado para interactuar con bases de datos relacionales.",
    },
    {
      name: "GIT",
      description:
        "Git es un sistema de control de versiones distribuido que facilita el seguimiento de los cambios en el código fuente.",
    },
  ];

export { skills };  