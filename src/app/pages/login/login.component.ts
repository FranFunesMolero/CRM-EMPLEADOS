import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  usersService = inject(UsersService);
  router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, []),
      password: new FormControl(null, [])
    }, [])
  }

  ngOnInit() {
    //compruebo si existe token y si existe redirijo a dashboard
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard'])
    }

  }

  async getDataLogin() {
    // llamamos al servicio y nos traemos la respuesta del servidor.
    try {
      let response: any = await this.usersService.login(this.loginForm.value)
      Swal.fire({
        title: response.success,
        icon: "success"
      });
      //voy a guardar el token el localStorage /cookies tecnicas, para mantener el estado de la aplicacion
      // localStorage.setItem('clave', valor); Esto es para guardar cosas en local storage
      // localStorage.getItem('clave') obtener el valor del localstorage
      // localStorage.clear() para vaciar todo el localstorage localStorage.removeItem('clave') para borrar una clave concreta.
      localStorage.setItem('token', response.token);
      // si me logueo correctamente deberia redirigir a dashboard
      this.router.navigate(['/dashboard'])


    } catch (res: any) {
      Swal.fire({
        title: res.error.error,
        icon: "error"
      });
    }
  }
}
