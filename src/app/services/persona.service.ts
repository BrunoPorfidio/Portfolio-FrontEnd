import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persona } from '../model/Persona';
import { environments } from 'src/environments/environments';


@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private ApiPersona = `${environments.Api}/persona/`;

  constructor(private http: HttpClient) {}

  public verPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.ApiPersona + 'ver');
  }

  public buscarPersona(id: number): Observable<any>{
    return this.http.get<any>(`${this.ApiPersona}buscar/${id}`);
  }

  public crearPersona(persona: Persona): Observable<Object> {
    return this.http.post(this.ApiPersona + `nuevo`, persona);
  }
  
  public editarPersona(persona: Persona): Observable<any> {
    return this.http.put<any>(`${this.ApiPersona}editar`, persona);
  }
  
  public borrarPersona(id:number | any): Observable<Persona> {
    return this.http.delete<Persona>(this.ApiPersona + `borrar/` + id);
  }
}
