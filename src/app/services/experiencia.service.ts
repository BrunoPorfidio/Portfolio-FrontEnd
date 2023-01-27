import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
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

  public verExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.ApiExperiencia}ver`);
  }

  public buscarExperiencia(id: number): Observable<any>{
    return this.http.get<any>(`${this.ApiExperiencia}buscar/${id}`);
  }

  public crearExperiencia(experiencia: Experiencia, id: number): Observable<Object>{
    return this.http.post<Object>(`${this.ApiExperiencia}nuevo/${id}`, experiencia, httpOptions);
  }
  
  public editarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(`${this.ApiExperiencia}editar`, experiencia, httpOptions);
  }

  public borrarExperiencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiExperiencia}borrar/${id}`);
  }

}
