import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { JwtDto } from '../model/JwtDto';
import { environment } from 'src/environments/environments';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ApiServerUrl = `${environment.Api}/auth/`;

  constructor(private httpClient: HttpClient) { 
    console.log("El servicio de autenticación está corriendo")
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.ApiServerUrl}nuevo`, nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(`${this.ApiServerUrl}login`, loginUsuario)
  }
}