import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  personas: Persona[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;
  isLogged = environments.isLogged;

  public persona: Persona;

  constructor(
    private tokenService: TokenService,
    private personaService: PersonaService,
  ) {}

  ngOnInit(): void {
    this.mostrarPersona();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
