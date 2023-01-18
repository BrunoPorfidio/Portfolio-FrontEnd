import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';
import { SwitchService } from 'src/app/services/switch.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectosList: Proyectos[] =[];
  proyectosForm: FormGroup;

  modalSwitch:boolean;
  proyectos: Proyectos[] = [];
  showMe:boolean=false;
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;

  public proyecto: Proyectos;

  constructor(
    private modalSS: SwitchService,
    private tokenService: TokenService,
    private proyectosService: ProyectoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.proyectosForm = this.formBuilder.group({
      id: [''],
      nombreProyecto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      fotoProyecto: ['', [Validators.required]],
  });
}

  toogleTag(){
    this.showMe=!this.showMe
  }

  ngOnInit(): void {

    this.reloadDate();

    this.mostrarProyectos();

    this.modalSS.$modal.subscribe((dato)=> {
      this.modalSwitch= dato
    })

    this.proyectosService.verProyecto();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  openModal(){
    this.modalSS.$modal.emit(true);
  }


  reloadDate() {
    this.proyectosService.verProyecto().subscribe((date) => {
      this.proyectosList = date;
    });
  }

  /*===/ Configuraciones del formulario /===*/

  private clearForm() {
    this.proyectosForm.setValue({
      id: '',
      nombreProyecto: '',
      descripcion: '',
      urlProyecto: '',
      fotoProyecto: '',
    });
  }


  onNewroyecto() {
    this.clearForm();
  }

  private loadForm(proyectos: Proyectos) {
    this.proyectosForm.setValue({
      id: proyectos.idProyectos,
      nombreProyecto: proyectos.nombreProyecto,
      descripcion: proyectos.descripcion,
      urlProyecto: proyectos.urlProyecto,
      fotoProyecto: proyectos.fotoProyecto,
    });
  }



  onEditProyectos(index: number) {
    let proyectos: Proyectos = this.proyectosList[index];
    this.loadForm(proyectos);
    this.openModal();
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

    refresh(): void {
      window.location.reload();
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


  

}
