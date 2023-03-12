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
    private formBuilder: FormBuilder,
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

  onSubmit() {
    let skills: Skills = this.skillsForm.value;

    (this.skillsForm.get('id')?.value == '') 
      this.skillService
      .crearSkills(skills)
      .subscribe((newSkill: Skills) => {
        this.skillList.push(newSkill);
      });
      
    this.hideModal();
    this.refresh();
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

  // Métodos para cerrar y abrir el modal
  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }
}
