import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/Skills';
import { TokenService } from 'src/app/services/token.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  frontSkills: Skills[] = [];
  backSkills: Skills[] = [];
  
  skilss: Skills[] = [];
  roles: string[];
  authority: string;
  isAdmin = false;


  public skills: Skills;

  constructor(
    private tokenService: TokenService,
    private skillsService: SkillsService,
  ){
  }
  ngOnInit(): void {

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    this.skillsService.getSkillsByType('Front').subscribe(skills => {
      this.frontSkills = skills;
    });

    this.skillsService.getSkillsByType('Back').subscribe(skills => {
      this.backSkills = skills;
    });


  }

  private mostrarSkills() {
    this.skillsService.verSkills().subscribe(
      (data) => {
        this.skilss = data;
      }
    );
  }

  delete(id?: number){
    if(id != undefined)[
      this.skillsService.borrarSkills(id).subscribe(
        data =>{
          this.mostrarSkills();
        }, err =>{
          alert("No se pudo Eliminar la Skill")
        }
      )
    ]
  }


}