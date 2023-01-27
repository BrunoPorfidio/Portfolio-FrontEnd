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

    this.reloadDate();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

   /*===/ Configuraciones del formulario /===*/

   onSubmit() {
    let skills: Skills = this.skillsForm.value;

    if (this.skillsForm.get('id')?.value == '') {
      this.skillsService
        .crearSkills(skills, 1)
        .subscribe((newSkill: Skills) => {
          this.skillList.push(newSkill);
        });
    } else {
      this.skillsService.editarSkills(skills).subscribe(() => {
        this.reloadDate();
      });
    }
    this.refresh();
  }

   onEditSkills(index: number) {
     let skills: Skills = this.skillList[index];
     this.loadForm(skills);
    }
    
    private loadForm(skills: Skills) {
     this.skillsForm.setValue({
       idSkill: skills.idSkill,
 
       nombreSkills: skills.nombreSkill,
       
       fotoSkill: skills.fotoSkill,
     });
   }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.skillsService.verSkills().subscribe((date) => {
      this.skillList = date;
    });
  }

  onDeletedSkills(index: number) {
    let skills: Skills = this.skillList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.skillsService.borrarSkills(skills.idSkill).subscribe(() => {
        this.reloadDate();
      });
      this.refresh();
    }
  }


  // Métodos para cerrar y abrir el modal


  refresh(): void {
      window.location.reload();
  }


  private mostrarSkills() {
    this.skillsService.verSkills().subscribe(
      (data) => {
        this.skilss = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
