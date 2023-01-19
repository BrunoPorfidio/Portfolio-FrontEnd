import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/model/Skills';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css'],
})
export class ModalSkillsComponent implements OnInit {

  // Variables globales

  skillList: Skills[] = [];
  isLogged: Boolean = false;
  skillsForm: FormGroup;
  roles: string[];
  isAdmin = false;

  constructor(
    private modalSS: SwitchService,
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

  closeModal() {
    this.modalSS.$modal.emit(false);
  }

  openModal() {
    this.modalSS.$modal.emit(true);
  }

  /*===/ Configuraciones del formulario /===*/

  private loadForm(skills: Skills) {
    this.skillsForm.setValue({
      idSkill: skills.idSkill,
      nombreSkill: skills.nombreSkill,
      fotoSkill: skills.fotoSkill,
    });
  }

  onEditSkill(index: number) {
    let skills: Skills = this.skillList[index];
    this.loadForm(skills);
  }

  onSubmit() {
    let skills: Skills = this.skillsForm.value;

    // this.skillsForm.get('id')?.value == '';
    this.skillService.crearSkills(skills).subscribe((newSkill: Skills) => {
      this.skillList.push(newSkill);
      alert("Skil Creada!")
    },);

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

  private obtenerSkills() {
    this.skillService.verSkills().subscribe((dato) => {
      this.skillList = dato;
    });
  }

  eliminarSkills(id: number) {
    this.skillService.borrarSkills(id).subscribe((dato) => {
      console.log(dato);
      this.obtenerSkills();
    });
  }
}
