import { Component, inject } from '@angular/core';
import { IEmployee } from '../../../interfaces/iemployee.interfaces';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  arrEmployees: IEmployee[] = [];
  employeesService = inject(EmployeesService)

  async ngOnInit() {

    this.arrEmployees = await this.employeesService.getAll();
    console.log(this.arrEmployees)

  }

}
