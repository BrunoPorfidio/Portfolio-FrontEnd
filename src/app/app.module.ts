import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorPorvider, InterceptorService } from './services/interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalAboutmeComponent } from './modals/modal-aboutme/modal-aboutme.component';
import { ModalProyectsComponent } from './modals/modal-proyects/modal-proyects.component';
import { ModalContactComponent } from './modals/modal-contact/modal-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    ProyectsComponent,
    ContactComponent,
    Error404Component,
    PortfolioComponent,
    LoginComponent,
    LoaderComponent,
    ModalAboutmeComponent,
    ModalProyectsComponent,
    ModalContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorPorvider,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
