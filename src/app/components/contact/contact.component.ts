import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { SwitchService } from 'src/app/services/switch.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  modalSwitch: boolean;
  personas: Persona[] =[];
  personaList: Persona[] =[];
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;
  contacto: FormGroup;

  public persona:Persona;

  constructor(
    private modalSS: SwitchService,
    private tokenService: TokenService,
    private personaService: PersonaService,
    private router: Router
  ) {
    this.contacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(20)])
    });
  }

  ngOnInit(): void {
    this.mostrarPersona();

    this.modalSS.$modal.subscribe((dato)=>{
      this.modalSwitch= dato;
    })

    this.personaService.verPersona();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  // enviarEmail(){

  //   let params = {
  //     email: Email.contacto.
  //   }
  
  //   this.http.post(`${this.ApiExperiencia}ver`);
  // }

openModal(){
  this.modalSwitch = true;
}

private mostrarPersona(){
  this.personaService.verPersona().subscribe(
    (dato)=> {
      this.personas = dato;
    },
    (err) => {
      console.log(err);
    }
  );
}

reloadDate(){
  this.personaService.verPersona().subscribe((dato)=> {
    this.personas = dato;
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
