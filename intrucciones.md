- Instalar Bootstrap
- Modificar app.config
            HttpClient
- Crear interfaz Employee
    _id, nombre, apellidos, email, telefono, departamento, salario, createdAt, updatedAt

- Crear el componente login y dashboard
        /login loginComponent
        /dashboard dashboardComponent

- Crear servicios de Users, Employees

- Login servicio users
    login()
    URL: https://crm-empleados.onrender.com/api/usuarios/login
    POST: { email: jj@gmail.com, password: '12345' }


- Creación servicio Employees
    getAll()
    URL: https://crm-empleados.onrender.com/api/empleados
    MÉTODO: GET

    - pintar una lista de empleados en el dashboard.
        - tenemos que pintar cada empleados en un card de empleados EmployeeCard

      - pintar la vista de empleado
          - activatedRoute captura el id de empleado y pintarlo. 
