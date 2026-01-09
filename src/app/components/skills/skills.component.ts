import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  // Iconos Frontend
  Shield, Type, FileCode, Palette, Atom, Wind,
  // Iconos Backend
  Coffee, Leaf, Database, Server, Container,
  GitBranch, Hammer, Cloud, Lock
} from 'lucide-angular';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  frontendSkills = [
    { name: 'Angular', icon: Shield, color: 'group-hover:text-red-600' },
    { name: 'React', icon: Atom, color: 'group-hover:text-cyan-400' },
    { name: 'TypeScript', icon: Type, color: 'group-hover:text-blue-600' },
    { name: 'HTML5', icon: FileCode, color: 'group-hover:text-orange-600' },
    { name: 'CSS3', icon: Palette, color: 'group-hover:text-blue-500' },
    { name: 'Tailwind', icon: Wind, color: 'group-hover:text-cyan-500' },
  ];

  backendSkills = [
    { name: 'Java 17', icon: Coffee, color: 'group-hover:text-orange-500' },
    { name: 'Spring Boot', icon: Leaf, color: 'group-hover:text-green-500' },
    { name: 'MySQL', icon: Database, color: 'group-hover:text-blue-500' },
    { name: 'Microservices', icon: Server, color: 'group-hover:text-indigo-500' },
    { name: 'Security (JWT)', icon: Lock, color: 'group-hover:text-yellow-500' },
    { name: 'Docker', icon: Container, color: 'group-hover:text-sky-600' },
    { name: 'Maven', icon: Hammer, color: 'group-hover:text-red-500' },
    { name: 'Git', icon: GitBranch, color: 'group-hover:text-orange-600' },
    { name: 'Cloudinary', icon: Cloud, color: 'group-hover:text-blue-700' }
  ];
}
