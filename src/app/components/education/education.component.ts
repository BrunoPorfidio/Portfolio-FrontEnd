import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { environments } from 'src/environments/environment';
import { TokenService } from 'src/app/services/token.service';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit  {


  educacions : Educacion[] = [];
  roles:string[];
  authority:string;
  isAdmin = false;

  isLogged = environments.isLogged;
  public educacion: Educacion;

  constructor(
    private tokenService: TokenService,
    private educacionService: EducacionService,
  ){

  }

  ngOnInit(): void {
    this.mostrarEducacion();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


private mostrarEducacion(){
  this.educacionService.verEducacion().subscribe(
  (data)=>{
    this.educacions = data;
  },
  (err)=>{
    console.log(err);
  }
  )
}

delete(id?: number){
  if(id != undefined)[
    this.educacionService.borrarEducacion(id).subscribe(
      data =>{
        this.mostrarEducacion();
      }, err =>{
        alert("No se pudo Eliminar")
      }
    )
  ]
}

}
