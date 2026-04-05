import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  // Iconos Frontend
  Shield, Type, FileCode, Palette, Atom, Wind, Workflow,
  FileText,
  Highlighter,
  // Iconos Backend
  Coffee, Leaf, Database, Server, Container,
  GitBranch, Hammer, Cloud, Lock,
  // Iconos AI
  Sparkles, MessageSquare, Globe, BookOpen
} from 'lucide-angular';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  constructor(public languageService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  frontendSkills = [
    { name: 'skill_angular', icon: Shield, color: 'group-hover:text-red-600' },
    { name: 'skill_react', icon: Atom, color: 'group-hover:text-cyan-400' },
    { name: 'skill_typescript', icon: Type, color: 'group-hover:text-blue-600' },
    { name: 'skill_html5', icon: FileCode, color: 'group-hover:text-orange-600' },
    { name: 'skill_css3', icon: Palette, color: 'group-hover:text-blue-500' },
    { name: 'skill_tailwind', icon: Wind, color: 'group-hover:text-cyan-500' },
    { name: 'skill_mermaid', icon: Workflow, color: 'group-hover:text-green-500' },
    { name: 'skill_reactMarkdown', icon: FileText, color: 'group-hover:text-yellow-500' },
    { name: 'skill_reactHighlighter', icon: Highlighter, color: 'group-hover:text-pink-500' }
  ];

  backendSkills = [
    { name: 'skill_java17', icon: Coffee, color: 'group-hover:text-orange-500' },
    { name: 'skill_springBoot', icon: Leaf, color: 'group-hover:text-green-500' },
    { name: 'skill_mysql', icon: Database, color: 'group-hover:text-blue-500' },
    { name: 'skill_microservices', icon: Server, color: 'group-hover:text-indigo-500' },
    { name: 'skill_jwt', icon: Lock, color: 'group-hover:text-yellow-500' },
    { name: 'skill_docker', icon: Container, color: 'group-hover:text-sky-600' },
    { name: 'skill_maven', icon: Hammer, color: 'group-hover:text-red-500' },
    { name: 'skill_git', icon: GitBranch, color: 'group-hover:text-orange-600' },
    { name: 'skill_cloudinary', icon: Cloud, color: 'group-hover:text-blue-700' }
  ];

  aiSkills = [
    { name: 'skill_geminiAPI', icon: Sparkles, color: 'group-hover:text-purple-400' },
    { name: 'skill_aiChat', icon: MessageSquare, color: 'group-hover:text-blue-400' },
    { name: 'skill_liveAICalls', icon: Sparkles, color: 'group-hover:text-pink-400' },
    { name: 'skill_translation', icon: Globe, color: 'group-hover:text-green-400' },
    { name: 'skill_exerciseGen', icon: BookOpen, color: 'group-hover:text-yellow-400' }
  ];

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
