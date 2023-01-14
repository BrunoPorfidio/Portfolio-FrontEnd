import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persona } from '../model/Persona';
import { environments } from 'src/environments/environments';


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

  public verPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.ApiPersona + 'ver');
  }

  public verPersonPerfil(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.ApiPersona + `ver/perfil/${id}`);
  }

  public crearPersona(persona: Persona): Observable<any> {
    return this.http.post<Persona>(this.ApiPersona + 'nuevo', persona, httpOptions);
  }

  public borrarPersona(id: any): Observable<any> {
    return this.http.delete(this.ApiPersona + `borrar/` + id);
  }

  public editarPersona(id: any,data: any): Observable<any> {
    return this.http.put(this.ApiPersona + `editar/${id}`, data);
  }



    // public verPersonas(): Observable<Persona[]>{
    //   return this.http.get<Persona[]>(`${this.ApiPersona}ver`);
    // }
  
    // public verPersonaPerfil(id: number): Observable<Persona> {
    //   return this.http.get<Persona>(`${this.ApiPersona}ver/perfil`+ id);
    // }

    // public crearPersona(persona:Persona ): Observable<Persona> {
    //   return this.http.post<Persona>(`${this.ApiPersona}nuevo/`, persona);
    // }
  
    // public editarPersona(  id: number, persona: Persona): Observable<any> {
    //   return this.http.put(`${this.ApiPersona}editar/`+ id, persona);
    // }
  
    // public borrarPersona(id: number): Observable<void> {
    //   return this.http.delete<void>(`${this.ApiPersona}borrar/` + id);
    // }
  
}
