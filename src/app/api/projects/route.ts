// app/api/projects/route.ts
import { NextResponse } from 'next/server';

const SPRING_API_URL = 'https://backendportfolio-wwbi.onrender.com/api';

export async function GET() {
  try {
    const response = await fetch(`${SPRING_API_URL}/projects`, {
      cache: 'no-store' // Para evitar cache em desenvolvimento
    });

    if (!response.ok) {
      throw new Error(`Spring API error: ${response.statusText}`);
    }

    const projects = await response.json();
    console.log(projects)
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const projectData = await request.json();

    const response = await fetch(`${SPRING_API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Adicione o token JWT aqui quando implementar autenticação
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error(`Spring API error: ${response.statusText}`);
    }

    const newProject = await response.json();
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create project' },
      { status: 500 }
    );
  }
}