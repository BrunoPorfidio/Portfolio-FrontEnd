import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-proyects-edit',
  templateUrl: './modal-proyects-edit.component.html',
  styleUrls: ['./modal-proyects-edit.component.css']
})
export class ModalProyectsEditComponent implements OnInit {

  proyectos: Proyectos;

  constructor(
    private activatedRoute: ActivatedRoute,
    private proyectosService: ProyectoService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['idProyectos'];
    this.proyectosService.buscarProyecto(id).subscribe(
      data => {this.proyectos = data;
      }, err => {
        alert("Error al cargar el Proyecto");
        this.router.navigate(['/portfolio']);
      }
      )
  }
  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['idProyectos'];
    this.proyectosService.editarProyecto(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['/portfolio'])
      }, err => {
        alert("Error al modificar el Proyecto");
        this.router.navigate(['/portfolio']);
      }
    )
  }

}