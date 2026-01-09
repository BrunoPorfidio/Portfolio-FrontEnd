import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  // Importamos los iconos específicos de Lucide
  Coffee, Leaf, Route, Lock, Database, Cloud,
  Blocks, Hammer, Atom, Code, Wind, Brain,
  Zap, AudioWaveform, Plug, Volume2, FileCode
} from 'lucide-angular';

export interface Project {
  title: string;
  role: string;
  company: string;
  companyType: 'Venedicto Devs' | 'Freelance';
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  url?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Planify',
      role: 'Software Architect & Full Stack Developer',
      company: 'Personal Project',
      companyType: 'Freelance',
      shortDescription: 'Scalable academic management platform built on a microservices architecture. Features centralized security via API Gateway, real-time study planning, and stateless document management.',
      longDescription: 'Architected and developed a distributed system using Java 17 and Spring Boot 3. Designed a "Defense in Depth" security model using Spring Cloud Gateway for centralized JWT validation and identity propagation, ensuring zero-trust communication between services. Implemented stateless file handling integrating Cloudinary for document storage and developed isolated microservices (User, Subject, Calendar, StudyPlan) with MySQL. Applied clean code principles, including DTO patterns, centralized exception handling, and Aspect-Oriented Programming (AOP) for audit logging.',
      technologies: [
        'Java 17', 'Spring Boot', 'Spring Cloud Gateway', 'Spring Security (JWT)',
        'MySQL', 'Cloudinary API', 'Microservices', 'Maven'
      ],
      url: 'https://github.com/BrunoPorfidio/planify-microservices'
    },
    {
      title: 'FluentAI',
      role: 'Frontend & AI',
      company: 'Personal Project',
      companyType: 'Freelance',
      shortDescription: 'Interactive English language coach featuring real-time voice conversation, roleplay scenarios, and instant grammar feedback powered by Google Gemini.',
      longDescription: 'Designed and developed a modern web application for language learning. Integrated the Google Gemini API (Flash & Pro models) to create a low-latency "Live Coach" capable of processing speech and generating audio responses in real-time. Implemented AudioWorklet for efficient audio streaming, managed complex application state with React, and built a responsive, accessibility-focused UI using Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Vite', 'Web Audio API'],
      url: 'https://fluent-ai-learn.vercel.app/'
    },
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
      url: 'https://www.berva.org'
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

  // Ahora esta función devuelve 'any' (el objeto del icono) en lugar de string
  getIconForTechnology(tech: string): any {

    // Mapa: Nombre Tecnología -> Objeto Icono Lucide
    const techIconMap: { [key: string]: any } = {
      // --- PLANIFY STACK ---
      'Java 17': Coffee,
      'Spring Boot': Leaf,
      'Spring Cloud Gateway': Route,
      'Spring Security (JWT)': Lock,
      'MySQL': Database,
      'Cloudinary API': Cloud,
      'Microservices': Blocks, // Lucide usa 'Blocks' o 'Box'
      'Maven': Hammer,

      // --- FLUENT AI STACK ---
      'React': Atom,
      'TypeScript': Code,
      'Tailwind CSS': Wind,
      'Google Gemini API': Brain,
      'Vite': Zap,             // Lucide usa 'Zap' para rayos/energía
      'Web Audio API': AudioWaveform, // Lucide usa 'AudioWaveform'

      // --- Otros ---
      'Angular': FileCode, // O el que prefieras
      'Java': Coffee
    };

    // 1. Retorno directo
    if (techIconMap[tech]) {
      return techIconMap[tech];
    }

    // 2. Búsqueda "fuzzy"
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('java')) return Coffee;
    if (lowerTech.includes('spring')) return Leaf;
    if (lowerTech.includes('react')) return Atom;
    if (lowerTech.includes('css')) return Wind;
    if (lowerTech.includes('api')) return Plug;
    if (lowerTech.includes('audio')) return Volume2;
    if (lowerTech.includes('angular')) return FileCode;

    // 3. Default
    return Code;
  }
}
