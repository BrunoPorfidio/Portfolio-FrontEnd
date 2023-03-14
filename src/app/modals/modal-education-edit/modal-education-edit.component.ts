import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-education-edit',
  templateUrl: './modal-education-edit.component.html',
  styleUrls: ['./modal-education-edit.component.css']
})
export class ModalEducationEditComponent  implements OnInit  {

// Variables globales

educacion: Educacion;

constructor(
  private activatedRoute: ActivatedRoute,
  private educacionService: EducacionService,
  private router: Router
) {}

ngOnInit(): void {

  const id = this.activatedRoute.snapshot.params['idEducacion'];
  this.educacionService.buscarEducacion(id).subscribe(
    data => {this.educacion = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['/portfolio']);
    }
    )
}


onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['idEducacion'];
  this.educacionService.editarEducacion(id, this.educacion).subscribe(
    data => {
      this.router.navigate(['/portfolio'])
    }, err => {
      alert("Error al modificar la Educacion");
      this.router.navigate(['/portfolio']);
    }
  )
}

}