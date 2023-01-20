import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  modalSwitch:boolean;
  personas: Persona[] = [];
  personaList: Persona[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;

  public persona: Persona;

  constructor(
    private modalSS: SwitchService,
    private tokenService: TokenService,
    private personaService: PersonaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.mostrarPersona();
    
    this.modalSS.$modal.subscribe((dato)=> {
      this.modalSwitch= dato;
    })


    this.personaService.verPersona();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  openModal(){
    this.modalSwitch = true;
  }

  private mostrarPersona() {
    this.personaService.verPersona().subscribe(
      (data) => {
        this.personas = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  reloadDate() {
    this.personaService.verPersona().subscribe((date) => {
      this.personaList = date;
    });
  }

  onEditPersona(index: number) {
    let persona: Persona = this.personaList[index];
    
    this.personaService.editarPersona(persona.id).subscribe((date) =>{
     
      this.reloadDate();
    })
    this.openModal()
  }

  onDeletedPersona(index: number) {
    let persona: Persona = this.personaList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.personaService.borrarPersona(persona.id).subscribe(() => {
        this.reloadDate();
      })
      this.refresh();
    }
  }

  refresh(): void {
    window.location.reload();
}

}
