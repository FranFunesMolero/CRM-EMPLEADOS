import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interfaces';
import { firstValueFrom } from 'rxjs';

type Response = {
  success: string;
  token: string;
}

type Error = {
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endpoint: string = 'https://crm-empleados.onrender.com/api/usuarios'
  private httpClient = inject(HttpClient);

  login(user: IUser): Promise<Response | Error> {
    return firstValueFrom(this.httpClient.post<Response | Error>(`${this.endpoint}/login`, user))
  }

}
