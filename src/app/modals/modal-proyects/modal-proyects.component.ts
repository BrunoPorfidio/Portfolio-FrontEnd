import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-proyects',
  templateUrl: './modal-proyects.component.html',
  styleUrls: ['./modal-proyects.component.css'],
})
export class ModalProyectsComponent implements OnInit {

  @Input() title = '';

  // Variables globales
  proyectosList: Proyectos[] = [];
  isLogged: Boolean = false;
  proyectosForm: FormGroup;
  roles: string[];
  isAdmin = false;

  public show = false;

  constructor(
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
  
  /*===/ Configuraciones del formulario /===*/

  private clearForm() {
    this.proyectosForm.setValue({
      idProyectos: '',

      nombreProyecto: '',

      descripcion: '',

      urlProyecto: '',

      fotoProyecto: '',
    });
  }

  onNewProyecto() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(proyectos: Proyectos) {
    this.proyectosForm.setValue({

      idProyectos: proyectos.idProyectos,

      nombreProyecto: proyectos.nombreProyecto,

      descripcion: proyectos.descripcion,

      urlProyecto: proyectos.urlProyecto,

      fotoProyecto: proyectos.fotoProyecto,
    });
  }

  onSubmit() {
    let proyectos: Proyectos = this.proyectosForm.value;

    (this.proyectosForm.get('id')?.value == '') 
      this.proyectosService
      .crearProyecto(proyectos)
      .subscribe((newProyecto: Proyectos) => {
        this.proyectosList.push(newProyecto);
      });

    this.hideModal();
    this.refresh();
  }


  onEditProyecto(index: number) {
    let proyectos: Proyectos = this.proyectosList[index];
    this.loadForm(proyectos);
    this.showModal();
  }
  
    reloadDate() {
      this.proyectosService.verProyecto().subscribe((date) => {
        this.proyectosList = date;
      });
    }

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