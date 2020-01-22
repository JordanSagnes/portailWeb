import { TestBed } from '@angular/core/testing';

import { IsAuthGuardService } from './is-auth-guard.service';

describe('IsAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsAuthGuardService = TestBed.get(IsAuthGuardService);
    expect(service).toBeTruthy();
  });
});
