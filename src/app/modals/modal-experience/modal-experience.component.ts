import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.css']
})
export class ModalExperienceComponent  implements OnInit  {

  nombreEmpresa: String;

  puesto: String;

  descripcion: String;

  inicio: Number;

  fin: Number;

constructor(
  private experienciaService: ExperienciaService,
  private router: Router
) {}

ngOnInit(): void {
}

onCreate(): void {
  const experiencia = new Experiencia(
    this.nombreEmpresa,
    this.puesto,
    this.inicio,
    this.fin
  );
  this.experienciaService.crearExperiencia(experiencia).subscribe(
    (data) => {
      this.router.navigate(['/portfolio']);
    },
    (err) => {
      alert('Error al crear la Experiencia');
      this.router.navigate(['/portfolio']);
    }
  );
}

}
