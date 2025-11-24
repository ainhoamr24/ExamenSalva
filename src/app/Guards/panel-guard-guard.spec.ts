import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { panelGuardGuard } from './panel-guard-guard';

describe('panelGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => panelGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
