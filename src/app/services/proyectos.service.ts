import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
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

  public verProyecto(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.ApiProyectos}ver`);
  }

  public buscarProyecto(id: number): Observable<any>{
    return this.http.get<any>(`${this.ApiProyectos}buscar/${id}`);
  }

  public crearProyecto(proyectos: Proyectos): Observable<Object> {
    return this.http.post<Object>(`${this.ApiProyectos}nuevo`, proyectos);
  }
  
  public borrarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiProyectos}borrar/${id}`);
  }

  public editarProyecto(proyectos: Proyectos): Observable<Object> {
    return this.http.put<Object>(`${this.ApiProyectos}editar`, proyectos);
  }
  

}