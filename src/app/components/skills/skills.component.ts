import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/Skills';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environments';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skilss: Skills[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;


  isLogged = environments.isLogged;
  public skills: Skills;

  constructor(
    private tokenService: TokenService,
    private skillsService: SkillsService,
  ){
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
