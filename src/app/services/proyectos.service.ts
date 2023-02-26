import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environment.prod';
import { Proyectos } from '../model/Proyectos';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private ApiProyectos = `${environments.Api}/proyecto/`;

  constructor(private http: HttpClient) { }

  public verProyecto() {
    return this.http.get<Proyectos[]>(`${this.ApiProyectos}ver`);
  }

  public buscarProyecto(proyectos: Proyectos){
    return this.http.get<Proyectos>(`${this.ApiProyectos}/`+ proyectos.idProyectos);
  }

  public crearProyecto(proyectos: Proyectos){
    return this.http.post<Proyectos>(`${this.ApiProyectos}nuevo`, proyectos, httpOptions);
  }
  
  public editarProyecto(proyectos: Proyectos){
    return this.http.put<Proyectos>(`${this.ApiProyectos}editar/`+ proyectos.idProyectos, proyectos, httpOptions);
  }

  public borrarProyecto(proyectos: Proyectos){
    return this.http.delete<Proyectos>(`${this.ApiProyectos}borrar/`+ proyectos.idProyectos);
  }

}