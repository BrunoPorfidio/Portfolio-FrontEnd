import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent, HomeComponent, EducationComponent, SkillsComponent, ExperienceComponent, ContactComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
