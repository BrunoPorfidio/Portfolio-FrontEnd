import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/model/Skills';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {


  skilss: Skills[] = [];
  personas: Persona[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;

  public skills: Skills;
  public persona: Persona;
  isLogged = environments.isLogged;

  constructor(
    private tokenService: TokenService,
    private personaService: PersonaService,
    private router: Router,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {

    this.personaService.verPersona().subscribe((data) => {
      this.personas = data;
    });

    this.skillsService.verSkills().subscribe((data) => {
      this.skilss = data;
    });


    this.personaService.verPersona();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

}
