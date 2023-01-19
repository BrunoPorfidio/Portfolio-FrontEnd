import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/Educacion';
import { AuthService } from 'src/app/services/auth.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css']
})
export class ModalEducationComponent implements OnInit  {

  // Variables globales

  educacionList: Educacion[] = [];
  isLogged: Boolean = false;
  educacionForm: FormGroup;
  roles: string[];
  isAdmin = false;

  constructor(
    private modalSS: SwitchService,
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

  closeModal() {
    this.modalSS.$modal.emit(false);
  }

  openModal() {
    this.modalSS.$modal.emit(true);
  }

  /*===/ Configuraciones del formulario /===*/

  private loadForm(educacion: Educacion) {
    this.educacionForm.setValue({
      idEducacion: [''], 
    
      institucion: ['', [Validators.required]],
     
      titulo: ['', [Validators.required]],
      
      inicio: ['', [Validators.required]],
      
      fin: ['', [Validators.required]],

      fotoEducacion: ['', [Validators.required]],
    });
  }

  onEditSkill(index: number) {
    let educacion: Educacion = this.educacionList[index];
    this.loadForm(educacion);
  }

  onSubmit() {
    let educacion: Educacion = this.educacionForm.value;

    // this.educacionForm.get('id')?.value == '';
    this.educacionService.crearEducacion(educacion).subscribe((newEducacion: Educacion) => {
      this.educacionList.push(newEducacion);
      alert("Educacion Creada!")
    },);

    this.refresh();
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

  eliminarEducacion(id: number) {
    this.educacionService.borrarEducacion(id).subscribe((dato) => {
      console.log(dato);
      this.obtenerEducacion();
    });
  }
}
