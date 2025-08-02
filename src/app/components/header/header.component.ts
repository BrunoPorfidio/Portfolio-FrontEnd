import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSectionId: string | null = 'about-me';

  private sectionIds = [
    'about-me', 
    'education', 
    'skills', 
    'experience', 
    'projects', 
    'contact'
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.checkActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkActiveSection();
  }

  private checkActiveSection(): void {
    const scrollOffset = 150; 
    let newActiveSectionId: string | null = null;

    for (const id of this.sectionIds) {
      const element = this.document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= scrollOffset && rect.bottom > scrollOffset) {
          newActiveSectionId = id;
          break;
        }
      }
    }
    
    this.activeSectionId = newActiveSectionId;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string): void {
    this.isMenuOpen = false;
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}