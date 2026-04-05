import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  constructor(public languageService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
