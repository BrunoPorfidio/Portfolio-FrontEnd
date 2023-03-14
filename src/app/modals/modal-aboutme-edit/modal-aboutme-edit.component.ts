import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/Persona'; 
import { PersonaService } from 'src/app/services/persona.service'; 
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-aboutme-edit',
  templateUrl: './modal-aboutme-edit.component.html',
  styleUrls: ['./modal-aboutme-edit.component.css']
})
export class ModalAboutmeEditComponent implements OnInit {

  // Variables globales
  persona: Persona;
  personaList: Persona[] = [];
  isLogged: Boolean = false;
  roles: string[];
  isAdmin = false;

  public show = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.buscarPersona(id).subscribe(
      data => {this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['/portfolio']);
      }
      )

    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }


  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.editarPersona(id, this.persona).subscribe(
      data => {
        this.router.navigate(['/portfolio'])
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['/portfolio']);
      }
    )
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


}