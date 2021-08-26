import { TestBed } from '@angular/core/testing';

import { UserServService } from './user-serv.service';

describe('UserServService', () => {
  let service: UserServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
