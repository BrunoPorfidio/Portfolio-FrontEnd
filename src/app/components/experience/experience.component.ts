import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  experienciaList: Experiencia[] = [];
  skillsForm: FormGroup;
  
  experiencias: Experiencia[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;


  isLogged = environments.isLogged;
  public experiencia: Experiencia;

  constructor(
    private tokenService: TokenService,
    private experienciaService: ExperienciaService,
    private formBuilder: FormBuilder
  ){
    this.skillsForm = this.formBuilder.group({
      idSkill: [''],

      nombreSkills: ['', [Validators.required]],

      fotoSkill: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.mostrarSkills();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  private mostrarSkills() {
    this.experienciaService.verExperiencia().subscribe(
      (data) => {
        this.experiencias = data;
      }
    );
  }

}
