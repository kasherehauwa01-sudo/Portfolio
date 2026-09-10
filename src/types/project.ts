export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  features: string[];
  url: string;
  technologies: string[];
  category: string;
  image: string;
  /** Файлы из public/projects в порядке показа; image используется по умолчанию. */
  images?: string[];
  status: string;
  note?: string;
  details?: { title: string; text: string }[];
}
