import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerComponent } from './question-answer.component';

describe('QuestionAnswerComponent', () => {
  let component: QuestionAnswerComponent;
  let fixture: ComponentFixture<QuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
