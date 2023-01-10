import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/Persona';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit  {

  public persona: Persona | undefined;
  isLogged = environment.isLogged;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private personaService: PersonaService,
    private formBuilder: FormBuilder,
    private ruta: Router
    ){}




public active : boolean = false;


  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  setActive() : void {
    this.active = !this.active;
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.ruta.navigate(['/portfolio'])
  }

  toHome(){
    document.getElementById('main')?.scrollIntoView({behavior:"smooth"})
  }

  toAbout(){
    document.getElementById('about-me')?.scrollIntoView({behavior:"smooth"})
  }

  toProyects(){
    document.getElementById('proyects')?.scrollIntoView({behavior:"smooth"})
  }

  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
  }
}
