import { CanActivateFn } from '@angular/router';

export const panelGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
