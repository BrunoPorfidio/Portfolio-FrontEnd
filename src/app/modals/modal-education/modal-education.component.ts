import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/Educacion';
import { AuthService } from 'src/app/services/auth.service';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css']
})
export class ModalEducationComponent implements OnInit  {

    @Input() title = '';

  // Variables globales

  educacionList: Educacion[] = [];
  isLogged: Boolean = false;
  educacionForm: FormGroup;
  roles: string[];
  isAdmin = false;
  
  public show = false;

  constructor(
    private educacionService: EducacionService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
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
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }


  /*===/ Configuraciones del formulario /===*/

    private clearForm() {
    this.educacionForm.setValue({
      idEducacion: '', 
    
      institucion: '',
     
      titulo: '',
      
      inicio: '',
      
      fin: '',

      fotoEducacion: '',
    });
  }

  onNewEducacion() {
    this.clearForm();
    this.showModal();
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
    this.hideModal();
    this.refresh();
  }
  
    onEditEducacion(index: number) {
      let educacion: Educacion = this.educacionList[index];
      this.loadForm(educacion);
      this.showModal();
    }
  
  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.educacionService.verEducacion().subscribe((date) => {
      this.educacionList = date;
    });
  }

  // Métodos para cerrar y abrir el modal

  refresh(): void {
    window.location.reload();
  }

  private obtenerEducacion() {
    this.educacionService.verEducacion().subscribe((dato) => {
      this.educacionList = dato;
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

    // Métodos para cerrar y abrir el modal
    showModal() {
      this.show = true;
    }
  
    hideModal() {
      this.show = false;
    }
}
