export interface Experience {
  name: string;
  linkedIn: string;
  page: string;
  image: string;
  timeInit: string;
  timeEnd: string | null;
  role: string;
  technologies: string;
}

const experience: Experience[] = [
  {
    name: 'Alkemy',
    linkedIn: 'https://www.linkedin.com/company/alkemy2020/',
    page: 'https://www.alkemy.org/',
    image:
      'https://media.licdn.com/dms/image/v2/D4D0BAQG_ZY153logsA/company-logo_200_200/company-logo_200_200/0/1714918712803/alkemy2020_logo?e=2147483647&v=beta&t=NeBeUgZO4WlpK_6rQ9fj_iQCyCgDj3uCKcQXVe3jI2Y',
    timeInit: 'Febrero 2025',
    timeEnd: null,
    role: 'Ingeniero de Software',
    technologies: 'Nest JS, TypeScript, React, Vue, C#, AWS, LLMs, Auth0',
  },
  {
    name: 'Tech House',
    linkedIn: 'https://www.linkedin.com/company/tech-house-tech/',
    page: 'https://tech-house.tech/',
    image: 'https://i.postimg.cc/xdSHdf39/tech-house-tech-logo.jpg',
    timeInit: 'Diciembre 2024',
    timeEnd: 'Febrero 2025',
    role: 'Pasante Desarrollador Web',
    technologies: 'Next JS, React, TypeScript, Firebase',
  },
];

export { experience };
