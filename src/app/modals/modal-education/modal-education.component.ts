import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css'],
})
export class ModalEducationComponent implements OnInit {

  institucion: String;

  titulo: String;

  inicio: Date;

  fin: Date;

  fotoEducacion: String;

  constructor(
    private educacionService: EducacionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const education = new Educacion(
      this.institucion,
      this.titulo,
      this.inicio,
      this.fin,
      this.fotoEducacion
    );
    this.educacionService.crearEducacion(education).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert('Error al crear la Educacion');
        this.router.navigate(['/portfolio']);
      }
    );
  }
}
