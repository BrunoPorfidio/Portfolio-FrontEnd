import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos: Proyectos[] = [];

  showMe:boolean=false;
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;

  public proyectoss: Proyectos;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private proyectosService: ProyectoService
  ) {}

  toogleTag(){
    this.showMe=!this.showMe
  }

  ngOnInit(): void {

this.proyectosService.verProyecto().subscribe(data =>{
  this.proyectos = data;
})

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}

