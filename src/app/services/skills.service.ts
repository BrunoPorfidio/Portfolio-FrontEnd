import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../model/Skills'; 
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private ApiSkills = `${environments.Api}/skills/`;

  constructor(private http: HttpClient) { }

  public verSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.ApiSkills}ver`);
  }

  public guardarSkills(skills: Skills): Observable<any>{
    return this.http.post<any>(`${this.ApiSkills}nuevo`, skills);
  }

  public editarSkills(id: number, skills: Skills): Observable<any>{
    return this.http.put<any>(`${this.ApiSkills}editar/${id}?nombreSkill=${skills.nombreSkills}
    &fotoSkill=${skills.fotoSkill}`, skills);
  }

  public borrarSkills(id: number): Observable<any>{
    return this.http.delete<any>(`${this.ApiSkills}borrar/${id}`);
  }

}
