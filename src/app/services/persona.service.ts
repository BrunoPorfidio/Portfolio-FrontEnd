import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persona } from '../model/Persona';
import { environments } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private ApiPersona = `${environments.Api}/persona/`;

  constructor(private http: HttpClient) {}

  public verPersona() {
    return this.http.get<Persona[]>(this.ApiPersona + 'ver');
  }

  public buscarPersona(persona: Persona){
    return this.http.get<Persona>(`${this.ApiPersona}`+ persona.id);
  }

  public crearPersona(persona: Persona){
    return this.http.post<Persona>(`${this.ApiPersona}nuevo`, persona, httpOptions);
  }
  
  public editarPersona(persona: Persona) {
    return this.http.put<Persona>(`${this.ApiPersona}editar/`+ persona.id, persona, httpOptions);
  }
  
  public borrarPersona(persona: Persona) {
    return this.http.delete<Persona>(`${this.ApiPersona}borrar/`+ persona.id);
  }
}
