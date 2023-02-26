import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/Experiencia';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.css']
})
export class ModalExperienceComponent  implements OnInit  {

  @Input() title = '';

// Variables globales

experienciaList: Experiencia[] = [];
isLogged: Boolean = false;
experienciaForm: FormGroup;
roles: string[];
isAdmin = false;

public show = false;

constructor(
  private experienciaService: ExperienciaService,
  private authService: AuthService,
  private formBuilder: FormBuilder
) {
  this.experienciaForm = this.formBuilder.group({

  idExperiencia: ['',],

  nombreEmpresa: ['', [Validators.required]],

  puesto: ['', [Validators.required]],

  descripcion: ['', [Validators.required]],

  inicio: ['', [Validators.required]],

  fin: ['', [Validators.required]],
  
  });
  }

ngOnInit(): void {
  this.isLogged = this.authService.isLogged();

  this.reloadDate();
}


/*===/ Configuraciones del formulario /===*/

  private clearForm() {
  this.experienciaForm.setValue({
    idExperiencia: '',
    
    nombreEmpresa: '',
    
    puesto: '',
    
    descripcion: '',
    
    inicio: '',
    
    fin: '',
  });
}

onNewExperiencia() {
  this.clearForm();
  this.showModal();
}

onSubmit() {
  let experiencia: Experiencia = this.experienciaForm.value;
  
  (this.experienciaForm.get('id')?.value == '') 
    this.experienciaService
    .crearExperiencia(experiencia)
    .subscribe((newExperiencia: Experiencia) => {
      this.experienciaList.push(newExperiencia);
    });

  this.hideModal();
  this.refresh();
}

// Método para recurar los datos de la base de datos
reloadDate() {
  this.experienciaService.verExperiencia().subscribe((date) => {
    this.experienciaList = date;
  });
}

// Métodos para cerrar y abrir el modal

refresh(): void {
  window.location.reload();
}

  // Métodos para cerrar y abrir el modal
  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }
}
