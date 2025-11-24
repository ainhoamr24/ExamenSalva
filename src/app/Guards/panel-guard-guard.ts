import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TareasService } from '../Services/tareas-service';

export const panelGuardGuard: CanActivateFn = () => {
  const tareasService = inject(TareasService);
  const router = inject(Router);

  const pass = prompt('Introduce el password');
  if (pass === tareasService.getPassword()) {
    return true;
  }

  router.navigate(['/error']);
  return false;
};
