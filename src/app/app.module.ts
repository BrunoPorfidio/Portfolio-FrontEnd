import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ModalSkillsComponent } from './modals/modal-skills/modal-skills.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ModalEducationComponent } from './modals/modal-education/modal-education.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceComponent } from './components/experience/experience.component';
import { ModalExperienceComponent } from './modals/modal-experience/modal-experience.component';
import { ModalSkillsEditComponent } from './modals/modal-skills-edit/modal-skills-edit.component';
import { ModalAboutmeEditComponent } from './modals/modal-aboutme-edit/modal-aboutme-edit.component';
import { ModalEducationEditComponent } from './modals/modal-education-edit/modal-education-edit.component';
import { ModalExperienceEditComponent } from './modals/modal-experience-edit/modal-experience-edit.component';
import { ModalProyectsEditComponent } from './modals/modal-proyects-edit/modal-proyects-edit.component';
import { RegisterComponent } from './components/login/register/register.component';
import { ToastrModule } from 'ngx-toastr';

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
    ModalSkillsComponent,
    SkillsComponent,
    EducationComponent,
    ModalEducationComponent,
    ExperienceComponent,
    ModalExperienceComponent,
    ModalSkillsEditComponent,
    ModalAboutmeEditComponent,
    ModalEducationEditComponent,
    ModalExperienceEditComponent,
    ModalProyectsEditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    interceptorPorvider,
    // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
