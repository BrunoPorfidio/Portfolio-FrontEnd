import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Educacion } from '../model/Educacion'; 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private ApiEducacion = `${environment.Api}/educacion/`;

  constructor(private http: HttpClient) { }

  public verEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.ApiEducacion}ver`);
  }

  public agregarEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.ApiEducacion}nuevo`, educacion);
  }

  public borrarEducacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiEducacion}borrar/${id}?institucion=`);
  }

  public editarEducacion(educacion: Educacion, id: number): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.ApiEducacion}editar/${id}?institucion=${educacion.institucion}
    &titulo=${educacion.titulo}&inicio=${educacion.inicio}&fin=${educacion.fin}`, educacion);
  }
}
