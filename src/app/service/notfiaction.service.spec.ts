import { TestBed } from '@angular/core/testing';

import { NotfiactionService } from './notfiaction.service';

describe('NotfiactionService', () => {
  let service: NotfiactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotfiactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
