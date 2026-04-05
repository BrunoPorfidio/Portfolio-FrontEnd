import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<Language>(this.getSavedLanguage());
  language$ = this.currentLanguage.asObservable();

  translations = {
    es: {
      // Navigation
      home: 'Inicio',
      education: 'Educación',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',

      // Hero/Home
      greeting: 'Hola, soy',
      role: 'Full Stack Developer',
      description: 'Especializado en desarrollo web con Angular, React y Java Spring Boot',

      // Skills Names - Frontend
      skill_angular: 'Angular',
      skill_react: 'React',
      skill_typescript: 'TypeScript',
      skill_html5: 'HTML5',
      skill_css3: 'CSS3',
      skill_tailwind: 'Tailwind',
      skill_mermaid: 'Mermaid.js',
      skill_reactMarkdown: 'React Markdown',
      skill_reactHighlighter: 'React Syntax Highlighter',

      // Skills Names - Backend
      skill_java17: 'Java 17',
      skill_springBoot: 'Spring Boot',
      skill_mysql: 'MySQL',
      skill_microservices: 'Microservices',
      skill_jwt: 'Security (JWT)',
      skill_docker: 'Docker',
      skill_maven: 'Maven',
      skill_git: 'Git',
      skill_cloudinary: 'Cloudinary',

      // Skills Names - AI
      skill_geminiAPI: 'Gemini API',
      skill_aiChat: 'AI Chat',
      skill_liveAICalls: 'Live AI Calls',
      skill_translation: 'Translation',
      skill_exerciseGen: 'Exercise Generation',
      edu_title: 'Tecnicatura en Programación',
      edu_unab: 'Universidad Nacional Guillermo Brown',
      edu_unab_desc: 'Carrera de técnico universitario integral que abarca los fundamentos centrales de la programación, desde principios fundamentales hasta aplicación avanzada y resolución profunda de problemas.',
      edu_unab_date: '(03-2023 - Presente)',

      edu_argentina: 'Full Stack Developer',
      edu_argentina_org: 'Argentina Programa',
      edu_argentina_desc: 'Programa de entrenamiento intensivo que cubre tecnologías de desarrollo web frontend y backend, y mejores prácticas.',
      edu_argentina_date: '(07-2022 - 03-2023)',

      edu_english1: 'Inglés para Desarrollo de Software',
      edu_english1_org: 'Centro Universitario de Idiomas',
      edu_english1_desc: 'Curso fundamental enfocado en construir vocabulario esencial en inglés y habilidades de comunicación específicamente diseñadas para la industria de desarrollo de software (CEFR A2).',
      edu_english1_date: '(12-2022 - 04-2023)',

      edu_english2: 'English for IT (I & II)',
      edu_english2_org: 'Cisco Networking Academy',
      edu_english2_desc: 'Programa completo para dominar tareas de comunicación complejas, negociación y habilidades de presentación para un entorno de TI global (CEFR B2).',
      edu_english2_date: '(07-2023 - 12-2023)',

      // Education Tags
      algorithms: 'Algoritmos',
      dataStructures: 'Estructuras de Datos',
      softwareArch: 'Arquitectura de Software',
      webFundamentals: 'Fundamentos Web',
      databases: 'Bases de Datos',
      versionControl: 'Control de Versiones',
      technicalVocab: 'Vocabulario Técnico',
      workplaceComm: 'Comunicación Laboral',
      professionalComm: 'Comunicación Profesional',
      advancedIT: 'Terminología Avanzada en TI',

      // Experience
      exp_backEnd: 'Desarrollador Backend Java',
      exp_venedicto: 'Venedicto Developers | 2023 - Presente',
      exp_backEnd_desc1: 'Desarrollé, optimicé y mantuve APIs REST de alto rendimiento utilizando Java y Spring Boot, acoplados con gestión eficiente de bases de datos MySQL.',
      exp_backEnd_desc2: 'Planifiqué y ejecuté flujos de trabajo de desarrollo para garantizar la entrega oportuna de características y un rendimiento robusto del sistema.',
      exp_backEnd_desc3: 'Desempeñé el rol de desarrollador backend principal en proyectos clave, incluyendo una plataforma de gestión de sesiones psicólogo-paciente y una aplicación de gestión de tenis de paleta, mientras también mantenía e integraba nuevas características para una aplicación web de firma legal.',

      exp_fullStack: 'Desarrollador Full Stack',
      exp_freelance: 'Freelance | 2023 - 2024',
      exp_fullStack_desc1: 'Diseñé y desarrollé soluciones full-stack para clientes, utilizando Angular para el frontend y Java con Spring Boot para el backend, integrado con bases de datos MySQL.',
      exp_fullStack_desc2: 'Administré el ciclo de vida completo del proyecto, desde la planificación inicial y recopilación de requisitos con clientes hasta la implementación final.',
      exp_fullStack_desc3: 'Entregué exitosamente aplicaciones personalizadas liderando proyectos individuales y colaborando efectivamente en equipos de desarrollo.',

      // Contact
      contactMessage: 'Contáctame',
      sendMessage: 'Enviar Mensaje',
      email: 'Correo electrónico',
      message: 'Mensaje',
      firstName: 'Nombre',
      lastName: 'Apellido',
      visitProject: 'Visitar Proyecto',

      // Projects Section
      clickMe: 'Haz clic',
      projectRole: 'Rol',
      projectsTitle: 'Proyectos',
      technologiesUsed: 'Tecnologías Utilizadas',

      // Projects Data
      proj_md2pdf_title: 'MD2PDF',
      proj_md2pdf_role: 'Ingeniero Frontend & Diseñador UI/UX',
      proj_md2pdf_short: 'Aplicación web convertidora de Markdown a PDF en tiempo real. Características editor de panel dividido receptivo, renderización nativa de diagramas Mermaid.js y resaltado de sintaxis profesional.',
      proj_md2pdf_long: 'Diseñé y desarrollé una aplicación de página única receptiva (SPA) usando React 19 y Vite. Ingenié un editor de vista previa en vivo altamente optimizado utilizando hooks de rebote personalizados y React.memo para asegurar rendimiento de 60fps al escribir, incluso cuando se renderizan diagramas Mermaid.js complejos. Implementé consultas avanzadas de medios de impresión CSS para eliminar elementos de la interfaz de usuario y formatear contenido para exportaciones PDF de alta fidelidad y precisión de píxeles. Integré rebajas con sabor de GitHub (GFM) y Resaltador de sintaxis de React para formateo de bloque de código de grado profesional.',

      proj_planify_title: 'Planify',
      proj_planify_role: 'Arquitecto de Software & Desarrollador Full Stack',
      proj_planify_short: 'Plataforma escalable de gestión académica construida en arquitectura de microservicios. Características seguridad centralizada vía API Gateway, planificación de estudio en tiempo real y gestión de documentos sin estado.',
      proj_planify_long: 'Diseñé y desarrollé un sistema distribuido usando Java 17 y Spring Boot 3. Diseñé un modelo de seguridad de "Defensa en Profundidad" usando Spring Cloud Gateway para validación JWT centralizada y propagación de identidad, asegurando comunicación de confianza cero entre servicios. Implementé manejo de archivos sin estado integrando Cloudinary para almacenamiento de documentos y desarrollé microservicios aislados (Usuario, Asignatura, Calendario, PlanDeEstudio) con MySQL. Apliqué principios de código limpio, incluyendo patrones DTO, manejo centralizado de excepciones y Programación Orientada a Aspecto (AOP) para registro de auditoría.',

      proj_fluentai_title: 'FluentAI',
      proj_fluentai_role: 'Frontend & IA',
      proj_fluentai_short: 'Entrenador interactivo de idioma inglés con conversación de voz en tiempo real, escenarios de juego de rol e comentarios gramaticales instantáneos impulsados por Google Gemini.',
      proj_fluentai_long: 'Diseñé y desarrollé una aplicación web moderna para aprendizaje de idiomas. Integré la API de Google Gemini (modelos Flash y Pro) para crear un "Entrenador en Vivo" de baja latencia capaz de procesar voz y generar respuestas de audio en tiempo real. Implementé AudioWorklet para transmisión de audio eficiente, administré estado de aplicación complejo con React y construí una interfaz de usuario receptiva y enfocada en accesibilidad usando Tailwind CSS.',

      proj_smatch_title: 'Smatch',
      proj_smatch_role: 'Back End',
      proj_smatch_short: 'API para gestionar torneos de tenis de paleta, incluyendo tienda de accesorios y sistema de alquiler de canchas.',
      proj_smatch_long: 'Desarrollé la lógica central del backend para una plataforma integral de tenis de paleta. Esto implicó crear endpoints para gestión de usuarios, brackets de torneos, disponibilidad de canchas en tiempo real e integración de pasarela de pagos para compras de accesorios.',

      proj_berva_title: 'Berva',
      proj_berva_role: 'Back End',
      proj_berva_short: 'API para gestionar sesiones psicólogo-paciente, permitiendo a empresas registrar empleados para cobertura de cuidado de salud mental.',
      proj_berva_long: 'Diseñé una API segura y conforme a HIPAA para manejar datos de pacientes sensibles, programación de sesiones y notas confidenciales. El sistema fue diseñado para escalabilidad para soportar múltiples clientes corporativos y sus empleados.',

      proj_lexline_title: 'Lexline',
      proj_lexline_role: 'Back End (Mantenimiento)',
      proj_lexline_short: 'API de gestión de casos para un bufete de abogados, proporcionando actualizaciones constantes y mejorando la relación cliente-abogado.',
      proj_lexline_long: 'Encargado de mantener y optimizar la API existente para un sistema de gestión de casos legales. Las responsabilidades incluían corrección de errores, mejora del rendimiento de consultas de bases de datos e integración de nuevas características basadas en las necesidades evolutivas del bufete de abogados.',

      proj_interlinked_title: 'Interlinked Demo',
      proj_interlinked_role: 'Full Stack',
      proj_interlinked_short: 'Una prueba de concepto para una plataforma de comunidad de desarrolladores donde creadores podrían publicar proyectos y buscar inversores.',
      proj_interlinked_long: 'Construí una prueba de concepto full-stack desde cero. La plataforma permitía a los usuarios crear perfiles, mostrar sus proyectos con detalles e imágenes y conectarse con inversores potenciales. El proyecto involucró tanto UI/UX frontend en Angular como desarrollo de API backend.',

      proj_lucibookslu_title: 'LuciBooksLu Blog',
      proj_lucibookslu_role: 'Full Stack',
      proj_lucibookslu_short: 'Un blog personalizado para una "Bookstagrammer" para publicar reseñas de libros, opiniones y experiencias personales.',
      proj_lucibookslu_long: 'Diseñé y desarrollé una plataforma de blog completamente funcional y personalizada. Las características incluyen un CMS para que el autor escriba y administre publicaciones, un sistema de comentarios para participación de lectores y un diseño receptivo optimizado para lectura tanto en desktop como en mobile.',

      // Footer
      footer: '© 2024 Bruno Porfidio. Todos los derechos reservados.'
    },
    en: {
      // Navigation
      home: 'Home',
      education: 'Education',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',

      // Hero/Home
      greeting: 'Hi, I\'m',
      role: 'Full Stack Developer',
      description: 'Specialized in web development with Angular, React and Java Spring Boot',

      // Skills
      frontEnd: 'Front End',
      backEnd: 'Back End & Tools',
      aiML: 'AI & Machine Learning',

      // Skills Names - Frontend
      skill_angular: 'Angular',
      skill_react: 'React',
      skill_typescript: 'TypeScript',
      skill_html5: 'HTML5',
      skill_css3: 'CSS3',
      skill_tailwind: 'Tailwind',
      skill_mermaid: 'Mermaid.js',
      skill_reactMarkdown: 'React Markdown',
      skill_reactHighlighter: 'React Syntax Highlighter',

      // Skills Names - Backend
      skill_java17: 'Java 17',
      skill_springBoot: 'Spring Boot',
      skill_mysql: 'MySQL',
      skill_microservices: 'Microservices',
      skill_jwt: 'Security (JWT)',
      skill_docker: 'Docker',
      skill_maven: 'Maven',
      skill_git: 'Git',
      skill_cloudinary: 'Cloudinary',

      // Skills Names - AI
      skill_geminiAPI: 'Gemini API',
      skill_aiChat: 'AI Chat',
      skill_liveAICalls: 'Live AI Calls',
      skill_translation: 'Translation',
      skill_exerciseGen: 'Exercise Generation',

      // Education
      edu_title: 'Technician in Programming',
      edu_unab: 'Universidad Nacional Guillermo Brown',
      edu_unab_desc: 'A comprehensive university technician degree covering the core fundamentals of programming, from foundational principles to advanced application and in-depth problem-solving.',
      edu_unab_date: '(03-2023 - Present)',

      edu_argentina: 'Full Stack Developer',
      edu_argentina_org: 'Argentina Programa',
      edu_argentina_desc: 'Intensive training program covering both front-end and back-end web development technologies and best practices.',
      edu_argentina_date: '(07-2022 - 03-2023)',

      edu_english1: 'English for Software Development',
      edu_english1_org: 'Centro Universitario de Idiomas',
      edu_english1_desc: 'A foundational course focused on building essential English vocabulary and communication skills specifically tailored for the software development industry (CEFR A2 Level).',
      edu_english1_date: '(12-2022 - 04-2023)',

      edu_english2: 'English for IT (I & II)',
      edu_english2_org: 'Cisco Networking Academy',
      edu_english2_desc: 'Completed the full program to master complex communication tasks, negotiation, and presentation skills for a global IT environment (CEFR B2 Level).',
      edu_english2_date: '(07-2023 - 12-2023)',

      // Education Tags
      algorithms: 'Algorithms',
      dataStructures: 'Data Structures',
      softwareArch: 'Software Architecture',
      webFundamentals: 'Web Fundamentals',
      databases: 'Databases',
      versionControl: 'Version Control',
      technicalVocab: 'Technical Vocabulary',
      workplaceComm: 'Workplace Communication',
      professionalComm: 'Professional Communication',
      advancedIT: 'Advanced IT Terminology',

      // Experience
      exp_backEnd: 'Back End Java Developer',
      exp_venedicto: 'Venedicto Developers | 2023 - Present',
      exp_backEnd_desc1: 'Developed, optimized, and maintained high-performance REST APIs using Java and Spring Boot, coupled with efficient MySQL database management.',
      exp_backEnd_desc2: 'Planned and executed development workflows to ensure timely feature delivery and robust system performance.',
      exp_backEnd_desc3: 'Served as the lead backend developer for key projects, including a psychologist-patient session management platform and a paddle tennis management app, while also maintaining and integrating new features for a law firm\'s web app.',

      exp_fullStack: 'Full Stack Developer',
      exp_freelance: 'Freelance | 2023 - 2024',
      exp_fullStack_desc1: 'Architected and developed full-stack solutions for clients, utilizing Angular for the frontend and Java with Spring Boot for the backend, integrated with MySQL databases.',
      exp_fullStack_desc2: 'Managed the complete project lifecycle, from initial planning and requirement gathering with clients to final deployment.',
      exp_fullStack_desc3: 'Successfully delivered custom applications by leading solo projects and collaborating effectively within development teams.',

      // Contact
      contactMessage: 'Contact me',
      sendMessage: 'Send Message',
      email: 'Email',
      message: 'Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      visitProject: 'Visit Project',

      // Projects Section
      clickMe: 'Click me!',
      projectRole: 'Role',
      projectsTitle: 'Projects',
      technologiesUsed: 'Technologies Used',

      // Projects Data
      proj_md2pdf_title: 'MD2PDF',
      proj_md2pdf_role: 'Frontend Engineer & UI/UX Designer',
      proj_md2pdf_short: 'Real-time Markdown to PDF converter web application. Features a responsive split-pane editor, native Mermaid.js diagram rendering, and professional syntax highlighting.',
      proj_md2pdf_long: 'Designed and developed a responsive single-page application (SPA) using React 19 and Vite. Engineered a highly optimized live-preview editor utilizing custom debounce hooks and React.memo to ensure 60fps typing performance, even when rendering complex Markdown and Mermaid.js diagrams. Implemented advanced CSS print media queries to strip UI elements and format content for high-fidelity, pixel-perfect PDF exports. Integrated GitHub Flavored Markdown (GFM) and React Syntax Highlighter for professional-grade code block formatting.',

      proj_planify_title: 'Planify',
      proj_planify_role: 'Software Architect & Full Stack Developer',
      proj_planify_short: 'Scalable academic management platform built on a microservices architecture. Features centralized security via API Gateway, real-time study planning, and stateless document management.',
      proj_planify_long: 'Architected and developed a distributed system using Java 17 and Spring Boot 3. Designed a "Defense in Depth" security model using Spring Cloud Gateway for centralized JWT validation and identity propagation, ensuring zero-trust communication between services. Implemented stateless file handling integrating Cloudinary for document storage and developed isolated microservices (User, Subject, Calendar, StudyPlan) with MySQL. Applied clean code principles, including DTO patterns, centralized exception handling, and Aspect-Oriented Programming (AOP) for audit logging.',

      proj_fluentai_title: 'FluentAI',
      proj_fluentai_role: 'Frontend & AI',
      proj_fluentai_short: 'Interactive English language coach featuring real-time voice conversation, roleplay scenarios, and instant grammar feedback powered by Google Gemini.',
      proj_fluentai_long: 'Designed and developed a modern web application for language learning. Integrated the Google Gemini API (Flash & Pro models) to create a low-latency "Live Coach" capable of processing speech and generating audio responses in real-time. Implemented AudioWorklet for efficient audio streaming, managed complex application state with React, and built a responsive, accessibility-focused UI using Tailwind CSS.',

      proj_smatch_title: 'Smatch',
      proj_smatch_role: 'Back End',
      proj_smatch_short: 'API for managing paddle tennis tournaments, including an accessory shop and court rental system.',
      proj_smatch_long: 'Developed the core backend logic for a comprehensive paddle tennis platform. This involved creating endpoints for user management, tournament brackets, real-time court availability, and integrating a payment gateway for accessory purchases.',

      proj_berva_title: 'Berva',
      proj_berva_role: 'Back End',
      proj_berva_short: 'API for managing psychologist-patient sessions, allowing companies to register employees for mental health care coverage.',
      proj_berva_long: 'Architected a secure and HIPAA-compliant API to handle sensitive patient data, session scheduling, and confidential notes. The system was designed for scalability to support multiple corporate clients and their employees.',

      proj_lexline_title: 'Lexline',
      proj_lexline_role: 'Back End (Maintenance)',
      proj_lexline_short: 'Case management API for a law firm, providing constant updates and improving the client-lawyer relationship.',
      proj_lexline_long: 'Tasked with maintaining and optimizing the existing API for a legal case management system. Responsibilities included bug fixing, improving database query performance, and integrating new features based on the law firm\'s evolving needs.',

      proj_interlinked_title: 'Interlinked Demo',
      proj_interlinked_role: 'Full Stack',
      proj_interlinked_short: 'A proof-of-concept for a developer community platform where creators could publish projects and seek investors.',
      proj_interlinked_long: 'Built a full-stack proof-of-concept from scratch. The platform allowed users to create profiles, showcase their projects with details and images, and connect with potential investors. The project involved both frontend UI/UX in Angular and backend API development.',

      proj_lucibookslu_title: 'LuciBooksLu Blog',
      proj_lucibookslu_role: 'Full Stack',
      proj_lucibookslu_short: 'A custom blog for a "Bookstagrammer" to publish book reviews, opinions, and personal experiences.',
      proj_lucibookslu_long: 'Designed and developed a fully functional, custom blog platform. Features include a CMS for the author to write and manage posts, a comment system for reader engagement, and a responsive design optimized for both desktop and mobile reading.',

      // Footer
      footer: '© 2024 Bruno Porfidio. All rights reserved.'
    }
  };

  constructor() {}

  private getSavedLanguage(): Language {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  }

  setLanguage(language: Language): void {
    this.currentLanguage.next(language);
    localStorage.setItem('language', language);
  }

  getLanguage(): Language {
    return this.currentLanguage.value;
  }

  getTranslation(key: string): string {
    const lang = this.currentLanguage.value;
    return (this.translations[lang] as any)[key] || key;
  }

  getTranslations(): any {
    return this.translations[this.currentLanguage.value];
  }
}
