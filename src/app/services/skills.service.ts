import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skills } from '../model/Skills'; 
// import { environments } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private ApiSkills = `https://api-portfolio-brunoporfidio.koyeb.app/skills/`;

  constructor(private http: HttpClient) { }

  public verSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.ApiSkills}ver`);
  }

  public buscarSkills(id: number): Observable<any>{
    return this.http.get<any>(`${this.ApiSkills}buscar/${id}`);
  }

  public crearSkills(skills: Skills, id: number): Observable<Object>{
    return this.http.post<Object>(`${this.ApiSkills}nuevo/${id}`, skills, httpOptions);
  }
  
  public editarSkills(skills: Skills): Observable<any> {
    return this.http.put<any>(`${this.ApiSkills}editar`, skills, httpOptions);
  }

  public borrarSkills(id: number): Observable<void>{
     return this.http.delete<void>(`${this.ApiSkills}borrar/${id}`);
  }
}
