import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { environments } from 'src/environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  isLogged = environments.isLogged;
  nuevoUsuario: NuevoUsuario;
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService, 
    private ruta: Router,
    private toastr: ToastrService){
  }
  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {

    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password); 
      this.authService.nuevo(this.nuevoUsuario).subscribe(
         data => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        })

        this.ruta.navigate(['/login'])
      }, 
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        })
        // console.log(this.errMsj);
      })
    }

}
