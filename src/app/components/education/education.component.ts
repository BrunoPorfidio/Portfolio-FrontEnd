import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/Educacion';
import { environments } from 'src/environments/environments';
import { TokenService } from 'src/app/services/token.service';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit  {


  educacions : Educacion[] = [];
  educacionList: Educacion[]=[];
  educacionForm: FormGroup;

  modalSwitch:boolean;
  roles:string[];
  authority:string;
  isAdmin = false;

  isLogged = environments.isLogged;
  public educacion: Educacion;

  constructor(
    private modalSS: SwitchService,
    private tokenService: TokenService,
    private educacionService: EducacionService,
    private formBuilder: FormBuilder
  ){
    this.educacionForm = this.formBuilder.group({
      idEducacion: [''], 
    
      institucion: ['', [Validators.required]],
     
      titulo: ['', [Validators.required]],
      
      inicio: ['', [Validators.required]],
      
      fin: ['', [Validators.required]],

      fotoEducacion: ['',[Validators.required]],
    });

  }

  ngOnInit(): void {
    this.mostrarEducacion();

    this.reloadDate();

    this.modalSS.$modal.subscribe((dato) =>{
      this.modalSwitch =dato
    })

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


  // Métodos para cerrar y abrir el modal

  openModal(){
    this.modalSwitch = true;
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

   /*===/ Configuraciones del formulario /===*/


   private loadForm(educacion: Educacion) {
    this.educacionForm.setValue({
      idEducacion: educacion.idEducacion,
    
      institucion: educacion.institucion,
     
      titulo: educacion.titulo,
      
      inicio: educacion.inicio,
      
      fin: educacion.fin,

      fotoEducacion: educacion.fotoEducacion,
    });
  }

  onEditEducacion(index: number) {
    let educacion: Educacion = this.educacionList[index];
    
    this.loadForm(educacion);
    this.openModal();
  }


// Método para recurar los datos de la base de datos
reloadDate() {
  this.educacionService.verEducacion().subscribe((date) => {
    this.educacionList = date;
  });
}

onDeletedEducacion(index: number) {
  let educacion: Educacion = this.educacionList[index];

  if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
    this.educacionService.borrarEducacion(educacion.idEducacion).subscribe(() => {
      this.reloadDate();
    });
    this.refresh();
  }
}



  refresh(): void {
    window.location.reload();
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

}
