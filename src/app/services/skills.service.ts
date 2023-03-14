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

   ApiSkills = `${environments.Api}/skills/`;

  constructor(private http: HttpClient) { }

  public verSkills(){
    return this.http.get<Skills[]>(`${this.ApiSkills}ver`);
  }

  public buscarSkills(id: number){
    return this.http.get<Skills>(`${this.ApiSkills}${id}`);
  }

  public crearSkills(skills: Skills): Observable<any>{
    return this.http.post<any>(`${this.ApiSkills}nuevo`, skills);
  }
  
  public editarSkills(id: number,skills: Skills): Observable<any>{
    return this.http.put<any>(`${this.ApiSkills}editar/${id}`, skills);
  }

  public borrarSkills(id: number): Observable<any>{
     return this.http.delete<any>(`${this.ApiSkills}borrar/${id}`);
  }
  
}
