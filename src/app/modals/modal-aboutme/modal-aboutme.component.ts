import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environments } from 'src/environments/environments';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-modal-aboutme',
  templateUrl: './modal-aboutme.component.html',
  styleUrls: ['./modal-aboutme.component.css'],
})
export class ModalAboutmeComponent implements OnInit {


  public modificarPersonas: Persona | undefined;
  public borrarPersona: Persona | undefined;

  roles: string[];
  authority: string;
  isAdmin = false;

  id: any = '';
  nuevaPersona: Persona = {
    nombre: '',
    apellido: '',
    subTitulo: '',
    acercaMi: '',
    urlFoto: '',
    linkedinUrl: '',
    githubUrl: '',
    imgBanner: '',
  };

  persona: Persona;

  modificarPersona: Persona = {
    nombre: '',
    apellido: '',
    subTitulo: '',
    acercaMi: '',
    urlFoto: '',
    linkedinUrl: '',
    githubUrl: '',
    imgBanner: '',
  };

  isLogged = environments.isLogged;

  constructor(
    private personaService: PersonaService,
    private ruta: Router,
    private activateRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


  openModal(mode: String, Persona?: Persona,): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'agregar') {
      button.setAttribute('data-target', '#agregarPersonaModal');
    } else if (mode === 'eliminar') {
      this.borrarPersona = Persona;
      button.setAttribute('data-target', '#eliminarPersonaModal');
    } else if (mode === 'editar') {
      this.modificarPersonas = Persona;
      button.setAttribute('data-target', '#editarPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }


  // agregarPersona() {
  //   this.personaService.crearPersona(this.nuevaPersona).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.ruta.navigate(['/portfolio']);
  //       window.location.reload();
  //       alert('¡Enviado correctamente!');
  //     },
  //     (err) => console.log(err)
  //   );

  //   this.id = this.activateRoute.snapshot.params['id'];
  //   this.personaService.verPersonPerfil(this.id).subscribe(
  //     (res) => {
  //       this.editarPersona = res;
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  editarPersona(id:any, data: Persona) {
    this.personaService.editarPersona(this.id, this.modificarPersona).subscribe(
      (res) => {
        this.modificarPersona = res;
        this.ruta.navigate(['/portfolio']);
      },
      (err) => console.log(err)
    );
  }

  // eliminarPersona(id: number) {
  //   this.personaService.borrarPersona(id).subscribe(
  //     (res) => {
  //       this.ngOnInit();
  //       window.location.reload();
  //       alert('¡Enviado correctamente!');
  //     },
  //     (err) => console.log(err)
  //   );
  // }


}
