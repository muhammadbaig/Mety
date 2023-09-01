import { TestBed } from '@angular/core/testing';

import { AuthguardnameGuard } from './authguardname.guard';

describe('AuthguardnameGuard', () => {
  let guard: AuthguardnameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardnameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
