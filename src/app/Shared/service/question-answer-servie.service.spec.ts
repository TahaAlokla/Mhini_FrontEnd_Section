import { TestBed } from '@angular/core/testing';

import { QuestionAnswerServieService } from './question-answer-servie.service';

describe('QuestionAnswerServieService', () => {
  let service: QuestionAnswerServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAnswerServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
