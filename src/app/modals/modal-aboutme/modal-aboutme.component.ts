import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-aboutme',
  templateUrl: './modal-aboutme.component.html',
  styleUrls: ['./modal-aboutme.component.css'],
})
export class ModalAboutmeComponent implements OnInit {
  nombre: string;

  apellido: string;

  subTitulo: string;

  acercaMi: string;

  linkedinUrl: string;

  githubUrl: string;

  email: string;

  telefono: string;

  ubicacion: string;

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  
  onCreate():void{
    const persona = new Persona(
      this.nombre,
      this.apellido,
      this.subTitulo,
      this.acercaMi,
      this.linkedinUrl,
      this.githubUrl,
      this.email,
      this.telefono,
      this.ubicacion
       );
      this.personaService.crearPersona(persona).subscribe(
        (data) => {
          this.router.navigate(['/portfolio']);
        },
        (err) => {
          alert('Error al crear la Persona');
          this.router.navigate(['/portfolio']);
        }
      );
  }
  
}