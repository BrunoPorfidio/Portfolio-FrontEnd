import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  
  experiencias: Experiencia[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;

  public experiencia: Experiencia;

  constructor(
    private tokenService: TokenService,
    private experienciaService: ExperienciaService,
  ){}
  ngOnInit(): void {
    this.mostrarExperiencia();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  private mostrarExperiencia() {
    this.experienciaService.verExperiencia().subscribe(
      (data) => {
        this.experiencias = data;
      }
    );
  }

  delete(id?: number){
    if(id != undefined)[
      this.experienciaService.borrarExperiencia(id).subscribe(
        data =>{
          this.mostrarExperiencia();
        }, err =>{
          alert("No se pudo Eliminar la Experiencia")
        }
      )
    ]
  }

}
