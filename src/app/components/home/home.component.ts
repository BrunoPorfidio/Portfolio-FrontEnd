import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
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
}