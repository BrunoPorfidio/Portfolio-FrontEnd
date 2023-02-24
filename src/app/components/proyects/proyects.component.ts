import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environment';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectosList: Proyectos[] =[];
  proyectosForm: FormGroup;

  proyectos: Proyectos[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;

  public proyecto: Proyectos;

  constructor(
    private tokenService: TokenService,
    private proyectosService: ProyectoService,
    private formBuilder: FormBuilder
  ) {
    this.proyectosForm = this.formBuilder.group({
      id: [''],
      nombreProyecto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      fotoProyecto: ['', [Validators.required]],
  });
}

  ngOnInit(): void {

    this.mostrarProyectos();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  private mostrarProyectos() {
    this.proyectosService.verProyecto().subscribe(
      (data) => {
        this.proyectos = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
