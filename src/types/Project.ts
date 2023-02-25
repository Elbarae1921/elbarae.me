export type Color =
  | `#${string}`
  | `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`;

export interface ProjectTechnology {
  image: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: ProjectTechnology[];
  upper_color: Color;
  lower_color: Color;
  showcase: string;
}
