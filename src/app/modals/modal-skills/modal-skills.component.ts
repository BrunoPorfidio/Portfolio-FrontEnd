import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/model/Skills';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css'],
})
export class ModalSkillsComponent implements OnInit {
  @Input() title = '';

  // Variables globales

  skillList: Skills[] = [];
  isLogged: Boolean = false;
  skillsForm: FormGroup;
  roles: string[];
  isAdmin = false;
  public show = false;

  constructor(
    private skillService: SkillsService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.skillsForm = this.formBuilder.group({
      idSkill: [''],

      nombreSkill: ['', [Validators.required]],

      fotoSkill: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/

  private clearForm() {
    this.skillsForm.setValue({
      idSkill: '',
      nombreSkill: '',
      fotoSkill: '',
    });
  }

  onNewSkill() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(skills: Skills) {
    this.skillsForm.setValue({

      idSkill: skills.idSkill,

      nombreSkill: skills.nombreSkill,

      fotoSkill: skills.fotoSkill,
    });
  }

  onSubmit() {
    let skills: Skills = this.skillsForm.value;

    if (this.skillsForm.get('id')?.value == '') {
      this.skillService
      .crearSkills(skills, 1)
      .subscribe((newSkill: Skills) => {
        this.skillList.push(newSkill);
      });
    } else {
      this.skillService.editarSkills(skills).subscribe(() => {
        this.reloadDate();
      });
    }
    this.hideModal();
    this.refresh();
  }

  onEditSkill(index: number) {
    let skills: Skills = this.skillList[index];
    this.loadForm(skills);
    this.showModal();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.skillService.verSkills().subscribe((date) => {
      this.skillList = date;
    });
  }

  // Métodos para cerrar y abrir el modal

  refresh(): void {
    window.location.reload();
  }

  onDeletedSkill(index: number) {
    let skills: Skills = this.skillList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.skillService
      .borrarSkills(skills.idSkill)
      .subscribe(() => {
        this.reloadDate();
      this.refresh();
        
      });
      this.refresh();
    }
  }

  // Métodos para cerrar y abrir el modal
  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }
}
