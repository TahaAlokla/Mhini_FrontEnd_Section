import { TestBed } from '@angular/core/testing';

import { WorkerAuthGuard } from './worker-auth.guard';

describe('WorkerAuthGuard', () => {
  let guard: WorkerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
