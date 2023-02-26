import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skills } from '../model/Skills'; 
import { environments } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private ApiSkills = `${environments.Api}/skills/`;

  constructor(private http: HttpClient) { }

  public verSkills(){
    return this.http.get<Skills[]>(`${this.ApiSkills}ver`);
  }

  public buscarSkills(skills: Skills){
    return this.http.get<Skills>(`${this.ApiSkills}/`+skills.idSkill);
  }

  public crearSkills(skills: Skills){
    return this.http.post<Skills>(`${this.ApiSkills}nuevo`, skills, httpOptions);
  }
  
  public editarSkills(skills: Skills){
    return this.http.put<Skills>(`${this.ApiSkills}editar/`+skills.idSkill, skills, httpOptions);
  }

  public borrarSkills(skills: Skills){
     return this.http.delete<Skills>(`${this.ApiSkills}borrar/`+ skills.idSkill);
  }
}
