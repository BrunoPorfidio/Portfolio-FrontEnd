import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experience-edit',
  templateUrl: './modal-experience-edit.component.html',
  styleUrls: ['./modal-experience-edit.component.css']
})
export class ModalExperienceEditComponent  implements OnInit  {

experiencia: Experiencia;

constructor(
  private activatedRoute: ActivatedRoute,
  private experienciaService: ExperienciaService,
  private router: Router
) {}

ngOnInit(): void {

  const id = this.activatedRoute.snapshot.params['idExperiencia'];
  this.experienciaService.buscarExperiencia(id).subscribe(
    data => {this.experiencia = data;
    }, err => {
      alert("Error al modificar la Experiencia");
      this.router.navigate(['/portfolio']);
    }
    )
}

onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['idExperiencia'];
  this.experienciaService.editarExperiencia(id, this.experiencia).subscribe(
    data => {
      this.router.navigate(['/portfolio'])
    }, err => {
      alert("Error al modificar la Experiencia");
      this.router.navigate(['/portfolio']);
    }
  )
}

}
