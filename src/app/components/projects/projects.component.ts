import { Component } from '@angular/core';
import { LucideAngularModule, LucideComponent } from 'lucide-angular';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor y *ngIf

// Define una interfaz para la estructura de cada proyecto
export interface Project {
  title: string;
  role: string;
  company: string;
  companyType: 'Venedicto Devs' | 'Freelance';
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  url?: string; // La URL es opcional
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule], // Añade CommonModule
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  projects: Project[] = [
    {
      title: 'Smatch',
      role: 'Back End',
      company: 'Venedicto Devs',
      companyType: 'Venedicto Devs',
      shortDescription: 'API for managing paddle tennis tournaments, including an accessory shop and court rental system.',
      longDescription: 'Developed the core backend logic for a comprehensive paddle tennis platform. This involved creating endpoints for user management, tournament brackets, real-time court availability, and integrating a payment gateway for accessory purchases.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      url: '#'
    },
    {
      title: 'Berva',
      role: 'Back End',
      company: 'Venedicto Devs',
      companyType: 'Venedicto Devs',
      shortDescription: 'API for managing psychologist-patient sessions, allowing companies to register employees for mental health care coverage.',
      longDescription: 'Architected a secure and HIPAA-compliant API to handle sensitive patient data, session scheduling, and confidential notes. The system was designed for scalability to support multiple corporate clients and their employees.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      url: 'www.berva.org'
    },
    {
      title: 'Lexline',
      role: 'Back End (Maintenance)',
      company: 'Venedicto Devs',
      companyType: 'Venedicto Devs',
      shortDescription: 'Case management API for a law firm, providing constant updates and improving the client-lawyer relationship.',
      longDescription: 'Tasked with maintaining and optimizing the existing API for a legal case management system. Responsibilities included bug fixing, improving database query performance, and integrating new features based on the law firm\'s evolving needs.',
      technologies: ['Java', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Interlinked Demo',
      role: 'Full Stack',
      company: 'Freelance',
      companyType: 'Freelance',
      shortDescription: 'A proof-of-concept for a developer community platform where creators could publish projects and seek investors.',
      longDescription: 'Built a full-stack proof-of-concept from scratch. The platform allowed users to create profiles, showcase their projects with details and images, and connect with potential investors. The project involved both frontend UI/UX in Angular and backend API development.',
      technologies: ['Angular', 'Java', 'Spring Boot'],
      url: 'https://kevinfonttlizama.github.io/Interlinked-demo.github.io/'
    },
    {
      title: 'LuciBooksLu Blog',
      role: 'Full Stack',
      company: 'Freelance',
      companyType: 'Freelance',
      shortDescription: 'A custom blog for a "Bookstagrammer" to publish book reviews, opinions, and personal experiences.',
      longDescription: 'Designed and developed a fully functional, custom blog platform. Features include a CMS for the author to write and manage posts, a comment system for reader engagement, and a responsive design optimized for both desktop and mobile reading.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
      url: 'https://lucibookslu.web.app'
    }
  ];

  selectedProject: Project | null = null;
  isModalOpen = false;

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  getIconForTechnology(tech: string): string {
    const techIconMap: { [key: string]: string } = {
      'Java': 'coffee',
      'Spring Boot': 'leaf',
      'MySQL': 'database',
      'Angular': 'shield'
    };
    return techIconMap[tech] || 'code';
  }
}