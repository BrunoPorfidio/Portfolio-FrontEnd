import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Experiencia } from '../model/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private ApiExperiencia = `${environments.Api}/experiencia/`;

  constructor(private http: HttpClient) { }

  public verExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.ApiExperiencia}ver`);
  }

  public agregarExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.ApiExperiencia}nuevo`, experiencia);
  }

  public borrarExperiencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiExperiencia}borrar/${id}`);
  }

  public editarExperiencia(experiencia: Experiencia, id: number): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.ApiExperiencia}editar/${id}?nombreEmpresa=${experiencia.nombreEmpresa}
    &puesto=${experiencia.puesto}&inicio=${experiencia.inicio}&fin=${experiencia.fin}&descripcion=${experiencia.descripcion}`, experiencia);
  }
}
