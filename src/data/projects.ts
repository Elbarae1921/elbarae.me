import { Project } from 'types/Project';

export const projects: Project[] = [
  // template
  {
    id: 1,
    title: 'The Air.',
    url: '#',
    description:
      'Motiver et sensibiliser les personnes sur la gravité de la pollution de l’air, son urgence est notre projet.',
    technologies: [
      {
        image: 'laravel.svg',
        name: 'Laravel'
      },
      {
        image: 'jquery.svg',
        name: 'jQuery'
      },
      {
        image: 'tailwindcss.svg',
        name: 'TailwindCSS'
      }
    ],
    upper_color: 'rgb(68, 193, 90)',
    lower_color: 'rgb(31, 78, 36)',
    showcase: 'theair.png'
  }
];
