import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
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
