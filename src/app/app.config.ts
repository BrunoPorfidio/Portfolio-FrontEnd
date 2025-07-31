import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { LucideAngularModule, Shield, Type, FileCode, Palette, Coffee, Leaf, Database, Linkedin, Github } from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(
    FormsModule,
    LucideAngularModule.pick({
      Shield,
      Type,
      FileCode,
      Palette,
      Coffee,
      Leaf,
      Database,
      Linkedin,
      Github 
    })
  )]
};