import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/Persona';
import { environments } from 'src/environments/environments';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit  {


  isAdmin = false;
  roles: string[];
  authority: string;
  public persona: Persona;
  isLogged = environments.isLogged;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private personaService: PersonaService,
    private formBuilder: FormBuilder,
    private ruta: Router
    ){}


public active : boolean = false;


  ngOnInit(): void {

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

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

  toExperience(){
    document.getElementById('experiece')?.scrollIntoView({behavior:"smooth"})
  }

  toProyects(){
    document.getElementById('proyects')?.scrollIntoView({behavior:"smooth"})
  }

  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
  }

  onSubmit(){
    console.log(this.persona);
  }

}
