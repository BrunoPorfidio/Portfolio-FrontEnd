import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { Persona } from 'src/app/model/Persona';
import { environments } from 'src/environments/environment';

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
    private ruta: Router,
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

  toHome(){
    document.getElementById('main')?.scrollIntoView({behavior:"smooth"})
  }

  toAbout(){
    document.getElementById('about-me')?.scrollIntoView({behavior:"smooth"})
  }

  toExperience(){
    document.getElementById('experiece')?.scrollIntoView({behavior:"smooth"})
  }

  toProjects(){
    document.getElementById('projects')?.scrollIntoView({behavior:"smooth"})
  }

  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
  }

}
