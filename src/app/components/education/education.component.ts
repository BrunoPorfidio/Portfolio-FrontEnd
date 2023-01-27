import { Component, OnInit } from '@angular/core';
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

  roles:string[];
  authority:string;
  isAdmin = false;

  isLogged = environments.isLogged;
  public educacion: Educacion;

  constructor(
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

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

   /*===/ Configuraciones del formulario /===*/

   onSubmit() {
    let educacion: Educacion = this.educacionForm.value;

    if (this.educacionForm.get('id')?.value == '') {
      this.educacionService
        .crearEducacion(educacion, 1)
        .subscribe((newEducacion: Educacion) => {
          this.educacionList.push(newEducacion);
        });
    } else {
      this.educacionService.editarEducacion(educacion).subscribe(() => {
        this.reloadDate();
      });
    }
    this.refresh();
  }
  
    onEditEducacion(index: number) {
      let educacion: Educacion = this.educacionList[index];
      this.loadForm(educacion);
    }

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
