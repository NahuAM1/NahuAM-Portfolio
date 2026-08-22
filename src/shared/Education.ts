export interface Education {
  title: string;
  institution: string;
  period: string;
  detail: string;
  /** Marks talks, courses and certifications apart from formal degrees. */
  kind: 'formacion' | 'certificacion';
  link: string | null;
}

const education: Education[] = [
  {
    title: 'US AI Week Córdoba',
    institution: 'Embajada de los Estados Unidos',
    period: 'Agosto 2025',
    detail:
      'Charla "Developing and Implementing AI Solutions: A Decision Maker\'s View", dictada por Jon Peha. Casos prácticos de inteligencia artificial implementados por AMD, Amazon Web Services, Cisco, Dell, IBM, Microsoft, Oracle, Red Hat y Salesforce para automatizar procesos y transformar la forma de trabajar de sus organizaciones. Certificado de asistencia.',
    kind: 'certificacion',
    link: null,
  },
  {
    title: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad Tecnológica Nacional — Facultad Regional Córdoba',
    period: '2019 — 2025',
    detail:
      'Proyecto final defendido con calificación 10: GMS, plataforma de gestión para la ONG Módulo Sanitario.',
    kind: 'formacion',
    link: null,
  },
  {
    title: 'Tecnicatura en Electromecánica',
    institution: 'Instituto Técnico Adrián P. Urquía',
    period: '2012 — 2018',
    detail:
      'Formación técnica en sistemas electromecánicos, base de mi enfoque en la automatización y la optimización de procesos.',
    kind: 'formacion',
    link: null,
  },
];

export { education };
