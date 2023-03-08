import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/Persona'; 
import { PersonaService } from 'src/app/services/persona.service'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-aboutme-edit',
  templateUrl: './modal-aboutme-edit.component.html',
  styleUrls: ['./modal-aboutme-edit.component.css']
})
export class ModalAboutmeEditComponent implements OnInit {
  @Input() title = '';

  // Variables globales
  persona: Persona;
  personaList: Persona[] = [];
  isLogged: Boolean = false;
  personaForm: FormGroup;
  roles: string[];
  isAdmin = false;

  public show = false;
  constructor(
    private personaService: PersonaService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.personaForm = this.formBuilder.group({
      id: [],

      nombre: ['', [Validators.required]],

      apellido: ['', [Validators.required]],

      subTitulo: ['', [Validators.required]],

      acercaMi: ['', [Validators.required]],

      urlFoto: ['', [Validators.required]],

      linkedinUrl: ['', [Validators.required]],

      githubUrl: ['', [Validators.required]],

      telefono: ['', [Validators.required]],
      
      email: ['', [Validators.required]],
      
      ubicacion: ['', [Validators.required]],

      imgBanner: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/


    private clearForm() {
    this.personaForm.setValue({
      id: '',

      nombre: '',

      apellido: '',

      subTitulo: '',

      acercaMi: '',

      urlFoto: '',

      linkedinUrl: '',

      githubUrl: '',

      telefono: '',

      email: '',

      ubicacion: '',

      imgBanner: '',
    });
  }

  onNewPersona() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(persona: Persona) {
    this.personaForm.setValue({

      id: persona.id,

      nombre: persona.nombre,

      apellido: persona.apellido,

      subTitulo: persona.subTitulo,

      acercaMi: persona.acercaMi,

      urlFoto: persona.urlFoto,

      linkedinUrl: persona.linkedinUrl,

      githubUrl: persona.githubUrl,

      imgBanner: persona.imgBanner,

      telefono: persona.telefono,

      email: persona.email,

      ubicacion: persona.ubicacion,
    });
  }
  
  onSubmit() {
    let persona: Persona = this.personaForm.value;
    
    this.personaService.editarPersona(persona).subscribe(() => {
      this.reloadDate();
    });
    
    this.hideModal();
    this.refresh();
  }
  
    onEditPersona(index: number) {
      let persona: Persona = this.personaList[index];
      this.loadForm(persona);
      this.showModal();
    }
  
  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.personaService.verPersona().subscribe((date) => {
      this.personaList = date;
    });
  }


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