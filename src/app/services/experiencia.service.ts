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

  public buscarExperiencia(experiencia: Experiencia){
    return this.http.get<Experiencia>(`${this.ApiExperiencia}`+ experiencia.idExperiencia);
  }

  public crearExperiencia(experiencia: Experiencia){
    return this.http.post<Experiencia>(`${this.ApiExperiencia}nuevo`+ experiencia.idExperiencia, experiencia, httpOptions);
  }
  
  public editarExperiencia(experiencia: Experiencia){
    return this.http.put<Experiencia>(`${this.ApiExperiencia}editar/`+ experiencia.idExperiencia, experiencia, httpOptions);
  }

  public borrarExperiencia(experiencia: Experiencia){
    return this.http.delete<Experiencia>(`${this.ApiExperiencia}borrar/`+ experiencia.idExperiencia);
  }

}
