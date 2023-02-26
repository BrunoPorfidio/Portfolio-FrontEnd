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

  public buscarEducacion(educacion: Educacion,){
    return this.http.get<Educacion>(`${this.ApiEducacion}buscar/`+ educacion.idEducacion);
  }

  public crearEducacion(educacion: Educacion){
    return this.http.post<Educacion>(`${this.ApiEducacion}nuevo`, educacion, httpOptions);
  }
  
  public editarEducacion(educacion: Educacion){
    return this.http.put<Educacion>(`${this.ApiEducacion}editar/`+ educacion.idEducacion, educacion, httpOptions);
  }

  public borrarEducacion(educacion: Educacion){
    return this.http.delete<Educacion>(`${this.ApiEducacion}borrar/`+ educacion.idEducacion, httpOptions);
  }

}
