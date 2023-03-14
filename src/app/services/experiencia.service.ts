import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environment.prod';
import { Experiencia } from '../model/Experiencia';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  private ApiExperiencia = `${environments.Api}/experiencia/`;

  constructor(private http: HttpClient) { }

  public verExperiencia(){
    return this.http.get<Experiencia[]>(`${this.ApiExperiencia}ver`);
  }

  public buscarExperiencia(id: number){
    return this.http.get<Experiencia>(`${this.ApiExperiencia}${id}`);
  }

  public crearExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<Experiencia>(`${this.ApiExperiencia}nuevo`, experiencia, httpOptions);
  }
  
  public editarExperiencia(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<Experiencia>(`${this.ApiExperiencia}editar/${id}`, experiencia, httpOptions);
  }

  public borrarExperiencia(id: number): Observable<any>{
    return this.http.delete<Experiencia>(`${this.ApiExperiencia}borrar/${id}`, httpOptions);
  }

}
