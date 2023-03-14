import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { RegisterComponent } from './components/login/register/register.component';
import { ModalAboutmeEditComponent } from './modals/modal-aboutme-edit/modal-aboutme-edit.component';
import { ModalEducationComponent } from './modals/modal-education/modal-education.component';
import { ModalEducationEditComponent } from './modals/modal-education-edit/modal-education-edit.component';
import { ModalSkillsComponent } from './modals/modal-skills/modal-skills.component';
import { ModalSkillsEditComponent } from './modals/modal-skills-edit/modal-skills-edit.component';
import { ModalExperienceComponent } from './modals/modal-experience/modal-experience.component';
import { ModalProyectsComponent } from './modals/modal-proyects/modal-proyects.component';
import { ModalProyectsEditComponent } from './modals/modal-proyects-edit/modal-proyects-edit.component';

const routes: Routes = [
  {
    path: 'portfolio',component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'editaboutMe/:id', component: ModalAboutmeEditComponent },
  { path: 'newEducation', component: ModalEducationComponent },
  { path: 'editEducation/:idEducacion', component: ModalEducationEditComponent },
  { path: 'newSkill', component: ModalSkillsComponent },
  { path: 'editSkill/:idSkill', component: ModalSkillsEditComponent },
  { path: 'newExperience', component: ModalExperienceComponent },
  { path: 'editExperience/:idExperiencia', component: ModalEducationEditComponent },
  { path: 'newProyect', component: ModalProyectsComponent },
  { path: 'editProyect/:idProyectos', component:ModalProyectsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
