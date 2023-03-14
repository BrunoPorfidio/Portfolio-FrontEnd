import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/Skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-modal-skills-edit',
  templateUrl: './modal-skills-edit.component.html',
  styleUrls: ['./modal-skills-edit.component.css']
})
export class ModalSkillsEditComponent  implements OnInit {

  skills: Skills;

  constructor(
    private activatedRoute: ActivatedRoute,
    private skillService: SkillsService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['idSkill'];
    this.skillService.buscarSkills(id).subscribe(
      data => {this.skills = data;
      }, err => {
        alert("Error al modificar la Skill");
        this.router.navigate(['/portfolio']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['idSkill'];
    this.skillService.editarSkills(id, this.skills).subscribe(
      data => {
        this.router.navigate(['/portfolio'])
      }, err => {
        alert("Error al modificar la Skill");
        this.router.navigate(['/portfolio']);
      }
    )
  }

}
