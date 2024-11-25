import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  console.log('paso siempre por guard')
  //obtener el token, si lo tengo redirijo al dashboard o me quede en login.
  const router = inject(Router);
  if (!localStorage.getItem('token')) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
