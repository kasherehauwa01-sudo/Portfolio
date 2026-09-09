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
  status: string;
  note?: string;
}
