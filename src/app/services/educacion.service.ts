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

  public verEducacion(){
    return this.http.get<Educacion[]>(`${this.ApiEducacion}ver`);
  }

  public buscarEducacion(id: number){
    return this.http.get<Educacion>(`${this.ApiEducacion}${id}`);
  }

  public crearEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(`${this.ApiEducacion}nuevo`, educacion, httpOptions);
  }
  
  public editarEducacion(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(`${this.ApiEducacion}editar/${id}`, educacion, httpOptions);
  }

  public borrarEducacion(id: number): Observable<any>{
    return this.http.delete<any>(`${this.ApiEducacion}borrar/${id}`, httpOptions);
  }

}
