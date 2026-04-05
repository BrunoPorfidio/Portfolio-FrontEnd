import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../services/language.service';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public languageService: LanguageService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(() => {
      this.cdr.markForCheck();
    });

    particlesJS('particles-js', {
      "particles": {
        "number": {"value": 60, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {"type": "circle"},
        "opacity": {"value": 0.5, "random": true},
        "size": {"value": 2, "random": true},
        "line_linked": {"enable": true, "distance": 150, "color": "#f9258a", "opacity": 0.3, "width": 1},
        "move": {"enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out"}
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}, "resize": true},
        "modes": {"grab": {"distance": 140, "line_linked": {"opacity": 0.7}}, "push": {"particles_nb": 4}}
      },
      "retina_detect": true
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
