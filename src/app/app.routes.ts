import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    { path: 'portfolio', component: PortfolioComponent },

    { path: 'home', component: HomeComponent },


];
