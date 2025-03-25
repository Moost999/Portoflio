// services/api.ts
const API_URL = 'http://localhost:8080/api';

export type Project = {
  id?: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  technologies: string[];
  images: string[];
  video: string | null;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch project with id ${id}`);
  }
  return response.json();
};

export const createProject = async (project: Omit<Project, 'id'>): Promise<Project> => {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Adicione o token JWT aqui quando implementar autenticação
      // 'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(project),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create project');
  }
  return response.json();
};