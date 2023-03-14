import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {


  proyectos: Proyectos[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;

  public proyecto: Proyectos;

  constructor(
    private tokenService: TokenService,
    private proyectosService: ProyectoService,
  ) {}

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

  delete(id?: number){
    if(id != undefined)[
      this.proyectosService.borrarProyecto(id).subscribe(
        data =>{
          this.mostrarProyectos();
        }, err =>{
          alert("No se pudo Eliminar el Proyecto")
        }
      )
    ]
  }

}
