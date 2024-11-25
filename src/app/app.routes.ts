import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { EmployeeListComponent } from './pages/dashboard/employee-list/employees.component'; 
import { FormEmployeeComponent } from './pages/dashboard/employee-view/new-employee.component'; 

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "login" },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [loginGuard], children:
        [{ path: "", pathMatch: "full", redirectTo: "employees" },
            { path: "employees", component: EmployeesComponent },
        {path: "new-employee", component: NewEmployeeComponent},
        ]
    },
    { path: "**", redirectTo:"login" }
];
