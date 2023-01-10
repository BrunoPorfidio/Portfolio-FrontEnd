import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/Persona'
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private ApiPersona = `${environment.Api}/persona/`;

  constructor(private httpClient: HttpClient) { }

  public verPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.ApiPersona}ver`);
  }


  public crearPersona(persona: Persona): Observable<Persona> {
    return this.httpClient.post<Persona>(`${this.ApiPersona}nuevo`, persona);
  }

  public borrarPersona(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.ApiPersona}borrar/${id}`);
  }

  public editarPersona(persona: FormData, id: number): Observable<Persona> {
    return this.httpClient.put<Persona>(`${this.ApiPersona}editar/${id}`, persona);
  }
}
