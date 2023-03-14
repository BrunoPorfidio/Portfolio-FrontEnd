import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-proyects',
  templateUrl: './modal-proyects.component.html',
  styleUrls: ['./modal-proyects.component.css'],
})
export class ModalProyectsComponent implements OnInit {

  nombreProyecto: String;

  descripcion: String;

  fotoProyecto: String;

  urlProyecto: String;

  constructor(
    private proyectosService: ProyectoService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  
  onCreate(): void {
    const proyectos = new Proyectos(
      this.nombreProyecto,
      this.descripcion,
      this.fotoProyecto,
      this.urlProyecto
    );
    this.proyectosService.crearProyecto(proyectos).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert('Error al crear el Proyecto');
        this.router.navigate(['/portfolio']);
      }
    );
  }

}