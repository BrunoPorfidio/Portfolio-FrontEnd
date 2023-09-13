import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/Skills';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css'],
})
export class ModalSkillsComponent implements OnInit {

  // Variables globales

  nombreSkill: String;
    
  fotoSkill: String;

  tipoSkill: String;

  constructor(
    private skillService: SkillsService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skills(
      this.nombreSkill,
      this.fotoSkill,
      this.tipoSkill,
    );
    this.skillService.crearSkills(skills).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert('Error al crear la Skill');
        this.router.navigate(['/portfolio']);
      }
    );
  }

}
