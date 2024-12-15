export interface Experience {
  name: string;
  linkedIn: string;
  image: string;
  timeInit: string;
  timeEnd: string | null;
  role: string;
  technologies: string;
}

const experience: Experience[] = [
  {
    name: 'Tech House',
    linkedIn: 'https://www.linkedin.com/company/tech-house-tech/',
    image:
      'https://media.licdn.com/dms/image/v2/D4D0BAQG_gXI9RWqECA/company-logo_200_200/company-logo_200_200/0/1713279250515/tech_house_tech_logo?e=1742428800&v=beta&t=uDZ0hStTFM6pvvjuvB8n0OHuXKzxBORU3hQQQ1MGiwE',
    timeInit: 'Noviembre 2024',
    timeEnd: null,
    role: 'Pasante Desarrollador Web',
    technologies: 'Next JS, TypeScript, React',
  },
];

export { experience };
