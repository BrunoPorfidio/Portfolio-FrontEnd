import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Proyectos } from '../model/Proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private ApiProyectos = `${environments.Api}/proyecto/`;

  constructor(private http: HttpClient) { }

  public verProyecto(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.ApiProyectos}ver`);
  }

  public crearProyecto(proyectos: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(`${this.ApiProyectos}nuevo`, proyectos);
  }

  public borrarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiProyectos}borrar/${id}`);
  }


  public editarProyecto(proyectos: Proyectos, id: number): Observable<Proyectos> {
    return this.http.put<Proyectos>(`${this.ApiProyectos}editar/${id}?tituloProyecto=${proyectos.nombreProyecto}
    &descripcionProyecto=${proyectos.descripcionProyecto}&urlProyecto=${proyectos.urlProyecto}&fotoProyecto=${proyectos.fotoProyecto}`, proyectos);
  }



}