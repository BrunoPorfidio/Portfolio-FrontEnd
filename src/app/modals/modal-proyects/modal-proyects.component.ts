import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/Proyectos'; 
import { ProyectoService } from 'src/app/services/proyectos.service'; 
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-proyects',
  templateUrl: './modal-proyects.component.html',
  styleUrls: ['./modal-proyects.component.css']
})
export class ModalProyectsComponent implements OnInit {

    // Variables globales
  proyectosList: Proyectos[] =[];
  isLogged: Boolean = false;
  proyectosForm: FormGroup;
  roles: string[];
  isAdmin = false;

  constructor(
    private modalSS: SwitchService,
    private proyectosService: ProyectoService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.proyectosForm = this.formBuilder.group({
      idProyectos: [''],
      nombreProyecto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      fotoProyecto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }


  /*===/ Configuraciones del formulario /===*/
  private loadForm(proyectos: Proyectos) {
    this.proyectosForm.setValue({
      idProyectos: proyectos.idProyectos,
      nombreProyecto: proyectos.nombreProyecto,
      descripcion: proyectos.descripcion,
      urlProyecto: proyectos.urlProyecto,
      fotoProyecto: proyectos.fotoProyecto,
    });
  }

  onEditProyectos(index: number) {
    let proyectos: Proyectos = this.proyectosList[index];
    this.loadForm(proyectos);
  }

  onUpdate() {
    let proyectos: Proyectos = this.proyectosForm.value;

    this.proyectosService.editarProyecto(proyectos).subscribe(() => {
        this.reloadDate();
      });
    }

    onDeletedProyecto(index: number) {
      let proyectos: Proyectos = this.proyectosList[index];
  
      if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
        this.proyectosService.borrarProyecto(proyectos.idProyectos).subscribe(() => {
          this.reloadDate();
        });
        this.refresh();
      }
    }
  


  onSubmit() {
    let proyectos: Proyectos = this.proyectosForm.value;

    this.proyectosForm.get('id')?.value == '';
      this.proyectosService
        .crearProyecto(proyectos)
        .subscribe((newProyectos: Proyectos) => {
          this.proyectosList.push(newProyectos);
        });
    
    this.refresh();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.proyectosService.verProyecto().subscribe((date) => {
      this.proyectosList = date;
    });
  }

  // Métodos para cerrar y abrir el modal


  refresh(): void {
      window.location.reload();
  }

   private obtenerProyectos(){
  this.proyectosService.verProyecto().subscribe(dato => {
    this.proyectosList = dato;
  })
}
}
