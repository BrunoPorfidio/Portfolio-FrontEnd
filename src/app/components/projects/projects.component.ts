import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import {
  LucideAngularModule,
  // Importamos los iconos específicos de Lucide
  Coffee,
  Leaf,
  Route,
  Lock,
  Database,
  Cloud,
  Blocks,
  Hammer,
  Atom,
  Code,
  Wind,
  Brain,
  Zap,
  AudioWaveform,
  Plug,
  Volume2,
  FileCode,
  Workflow,
  FileText,
  Highlighter,
} from 'lucide-angular';

export interface Project {
  titleKey: string;
  roleKey: string;
  company: string;
  companyType: 'Venedicto Devs' | 'Freelance';
  shortDescriptionKey: string;
  longDescriptionKey: string;
  technologies: string[];
  url?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(public languageService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  projects: Project[] = [
    {
      titleKey: 'proj_md2pdf_title',
      roleKey: 'proj_md2pdf_role',
      company: 'Personal Project',
      companyType: 'Freelance',
      shortDescriptionKey: 'proj_md2pdf_short',
      longDescriptionKey: 'proj_md2pdf_long',
      technologies: [
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'Mermaid.js',
        'React Markdown',
        'React Syntax Highlighter',
      ],
      url: 'https://md2pdf-arg.vercel.app',
    },
    {
      titleKey: 'proj_planify_title',
      roleKey: 'proj_planify_role',
      company: 'Personal Project',
      companyType: 'Freelance',
      shortDescriptionKey: 'proj_planify_short',
      longDescriptionKey: 'proj_planify_long',
      technologies: [
        'Java 17',
        'Spring Boot',
        'Spring Cloud Gateway',
        'Spring Security (JWT)',
        'MySQL',
        'Cloudinary API',
        'Microservices',
        'Maven',
      ],
      url: 'https://github.com/BrunoPorfidio/planify-microservices',
    },
    {
      titleKey: 'proj_fluentai_title',
      roleKey: 'proj_fluentai_role',
      company: 'Personal Project',
      companyType: 'Freelance',
      shortDescriptionKey: 'proj_fluentai_short',
      longDescriptionKey: 'proj_fluentai_long',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Google Gemini API',
        'Vite',
        'Web Audio API',
      ],
      url: 'https://fluent-ai-learn.vercel.app/',
    },
    {
      titleKey: 'proj_smatch_title',
      roleKey: 'proj_smatch_role',
      company: 'Venedicto Devs',
      companyType: 'Venedicto Devs',
      shortDescriptionKey: 'proj_smatch_short',
      longDescriptionKey: 'proj_smatch_long',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      url: '#',
    },
    {
      titleKey: 'proj_berva_title',
      roleKey: 'proj_berva_role',
      company: 'Venedicto Devs',
      companyType: 'Venedicto Devs',
      shortDescriptionKey: 'proj_berva_short',
      longDescriptionKey: 'proj_berva_long',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      url: 'https://www.berva.org',
    },
    {
      titleKey: 'proj_lexline_title',
      roleKey: 'proj_lexline_role',
      company: 'Venedicto Devs',
      companyType: 'Venedicto Devs',
      shortDescriptionKey: 'proj_lexline_short',
      longDescriptionKey: 'proj_lexline_long',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
    },
    {
      titleKey: 'proj_interlinked_title',
      roleKey: 'proj_interlinked_role',
      company: 'Freelance',
      companyType: 'Freelance',
      shortDescriptionKey: 'proj_interlinked_short',
      longDescriptionKey: 'proj_interlinked_long',
      technologies: ['Angular', 'Java', 'Spring Boot'],
      url: 'https://kevinfonttlizama.github.io/Interlinked-demo.github.io/',
    },
    {
      titleKey: 'proj_lucibookslu_title',
      roleKey: 'proj_lucibookslu_role',
      company: 'Freelance',
      companyType: 'Freelance',
      shortDescriptionKey: 'proj_lucibookslu_short',
      longDescriptionKey: 'proj_lucibookslu_long',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
      url: 'https://lucibookslu.web.app',
    },
  ];

  isModalOpen: boolean = false;
  selectedProject: Project | null = null;

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  getProjectTitle(project: Project): string {
    return this.languageService.getTranslation(project.titleKey);
  }

  getProjectRole(project: Project): string {
    return this.languageService.getTranslation(project.roleKey);
  }

  getProjectShortDescription(project: Project): string {
    return this.languageService.getTranslation(project.shortDescriptionKey);
  }

  getProjectLongDescription(project: Project): string {
    return this.languageService.getTranslation(project.longDescriptionKey);
  }

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

      // --- MD2PDF STACK ---
      'React 19': Atom,
      'Mermaid.js': Workflow, // Representa diagramas de flujo/nodos
      'React Markdown': FileText, // Representa documentos de texto
      'React Syntax Highlighter': Highlighter,

      // --- PLANIFY STACK ---
      'Java 17': Coffee,
      'Spring Boot': Leaf,
      'Spring Cloud Gateway': Route,
      'Spring Security (JWT)': Lock,
      MySQL: Database,
      'Cloudinary API': Cloud,
      Microservices: Blocks, // Lucide usa 'Blocks' o 'Box'
      Maven: Hammer,

      // --- FLUENT AI STACK ---
      React: Atom,
      TypeScript: Code,
      'Tailwind CSS': Wind,
      'Google Gemini API': Brain,
      Vite: Zap, // Lucide usa 'Zap' para rayos/energía
      'Web Audio API': AudioWaveform, // Lucide usa 'AudioWaveform'

      // --- Otros ---
      Angular: FileCode, // O el que prefieras
      Java: Coffee,
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
