import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environment.prod';
import { Educacion } from '../model/Educacion'; 

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private ApiEducacion = `${environments.Api}/educacion/`;

  constructor(private http: HttpClient) { }

  public verEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.ApiEducacion}ver`);
  }

  public buscarEducacion(id: number): Observable<any>{
    return this.http.get<any>(`${this.ApiEducacion}buscar/${id}`);
  }

  public crearEducacion(educacion: Educacion, id: number): Observable<Object>{
    return this.http.post<Object>(`${this.ApiEducacion}nuevo/${id}`, educacion, httpOptions);
  }
  
  public editarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(`${this.ApiEducacion}editar`, educacion, httpOptions);
  }

  public borrarEducacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiEducacion}borrar/${id}`);
  }

}
