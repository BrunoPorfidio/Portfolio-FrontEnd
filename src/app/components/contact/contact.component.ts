import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environment';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  personas: Persona[] =[];
  personaList: Persona[] =[];
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;
  contacto: FormGroup;

  public persona:Persona;

  constructor(
    private tokenService: TokenService,
    private personaService: PersonaService,
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

}
