import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/Persona'; 
import { PersonaService } from 'src/app/services/persona.service'; 
import { environments } from 'src/environments/environments';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-aboutme',
  templateUrl: './modal-aboutme.component.html',
  styleUrls: ['./modal-aboutme.component.css'],
})
export class ModalAboutmeComponent implements OnInit {

  // Variables globales
  persona: Persona;
  personaList: Persona[] = [];
  isLogged: Boolean = false;
  personaForm: FormGroup;
  roles: string[];
  isAdmin = false;

  constructor(
    private modalSS: SwitchService,
    private personaService: PersonaService,
    private tokenService: TokenService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.personaForm = this.formBuilder.group({
      id: [5],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      subTitulo: ['', [Validators.required]],
      acercaMi: ['', [Validators.required]],
      urlFoto: ['', [Validators.required]],
      linkedinUrl: ['', [Validators.required]],
      githubUrl: ['', [Validators.required]],
      imgBanner: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  /*===/ Configuraciones del formulario /===*/
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
    });
  }

  onEditPersona(index: number) {
    let persona: Persona = this.personaList[index];
    this.loadForm(persona);
  }

  onSubmit() {
    let persona: Persona = this.personaForm.value;

    if (this.personaForm.get('id')?.value == 5) {
      this.personaService
        .crearPersona(persona)
        .subscribe((newPersona: Persona) => {
          this.personaList.push(newPersona);
        });
    } else {
      this.personaService.editarPersona(persona).subscribe(() => {
        this.reloadDate();
      });
    }
    this.refresh();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.personaService.verPersona().subscribe((date) => {
      this.personaList = date;
    });
  }

  // Métodos para cerrar y abrir el modal


  refresh(): void {
      window.location.reload();
  }

   private obtenerPersona(){
  this.personaService.verPersona().subscribe(dato => {
    this.personaList = dato;
  })
}

  eliminarPersona(id:number){
  this.personaService.borrarPersona(id).subscribe(dato => {
    console.log(dato);
    this.obtenerPersona();
  })
}
}