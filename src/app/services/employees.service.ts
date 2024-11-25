import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee.interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private endpoint: string = "https://crm-empleados.onrender.com/api/empleados"
  private httpClient = inject(HttpClient)


  getAll(): Promise<IEmployee[]> {
    //opcion 1 crear una variable con las cabeceras
    /*  const httpOptions = {
       headers: new HttpHeaders({
         "Content-Type": "aplication/json",
         "Authorization": localStorage.getItem('token')!
       })
     } */

    return firstValueFrom(this.httpClient.get<IEmployee[]>(this.endpoint))
  }

  //opcion 2: funcion interceptora sirve para cuando diferentes tokens en mi aplica por servicios
  /*
  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "aplication/json",
        "Authorization": localStorage.getItem('token')!
      })
    }
  }
    */


}
