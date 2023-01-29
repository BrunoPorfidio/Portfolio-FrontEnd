import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/Skills';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { SkillsService } from 'src/app/services/skills.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillList: Skills[] = [];
  skillsForm: FormGroup;
  
  skilss: Skills[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;


  isLogged = environments.isLogged;
  public skills: Skills;

  constructor(
    private tokenService: TokenService,
    private skillsService: SkillsService,
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
    this.skillsService.verSkills().subscribe(
      (data) => {
        this.skilss = data;
      }
    );
  }

}
