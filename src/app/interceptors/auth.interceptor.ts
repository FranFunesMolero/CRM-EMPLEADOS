import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //console.log('cargando interceptor')
  const token = localStorage.getItem('token') || "";

  const cloneReq = req.clone({
    setHeaders: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })

  return next(cloneReq);
};
