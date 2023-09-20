import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { RegisterComponent } from './components/login/register/register.component';
import { ModalAboutmeComponent } from './modals/modal-aboutme/modal-aboutme.component';
import { ModalAboutmeEditComponent } from './modals/modal-aboutme-edit/modal-aboutme-edit.component';
import { ModalEducationComponent } from './modals/modal-education/modal-education.component';
import { ModalEducationEditComponent } from './modals/modal-education-edit/modal-education-edit.component';
import { ModalSkillsComponent } from './modals/modal-skills/modal-skills.component';
import { ModalSkillsEditComponent } from './modals/modal-skills-edit/modal-skills-edit.component';
import { ModalExperienceComponent } from './modals/modal-experience/modal-experience.component';
import { ModalProyectsComponent } from './modals/modal-proyects/modal-proyects.component';
import { ModalProyectsEditComponent } from './modals/modal-proyects-edit/modal-proyects-edit.component';
import { ModalExperienceEditComponent } from './modals/modal-experience-edit/modal-experience-edit.component';

const routes: Routes = [

  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  {
    path: 'portfolio',component: PortfolioComponent },

  //---------- Section Login y future Register ------------ 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //---------- Section New Prefile ------------ 
  { path: 'newAboutMe', component: ModalAboutmeComponent },
  //---------- Section Edit AboutMe ------------ 
  { path: 'editaboutMe/:id', component: ModalAboutmeEditComponent },

  //---------- Section New Education ------------ 
  { path: 'newEducation', component: ModalEducationComponent },
  //---------- Section Edit Education ------------ 
  { path: 'editEducation/:idEducacion', component: ModalEducationEditComponent },

  //---------- Section New Skills ------------ 
  { path: 'newSkill', component: ModalSkillsComponent },
  //---------- Section Edit Skills ------------ 
  { path: 'editSkill/:idSkill', component: ModalSkillsEditComponent },

  //---------- Section New Experience ------------ 
  { path: 'newExperience', component: ModalExperienceComponent },
  //---------- Section Edit Experience ------------ 
  { path: 'editExperience/:idExperiencia', component: ModalExperienceEditComponent },

  //---------- Section New Project ------------ 
  { path: 'newProyect', component: ModalProyectsComponent },
  //---------- Section Edit Project ------------ 
  { path: 'editProyect/:idProyectos', component:ModalProyectsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
