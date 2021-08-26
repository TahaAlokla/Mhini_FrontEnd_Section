import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationWorkerTermsComponent } from './registration-worker-terms.component';

describe('RegistrationWorkerTermsComponent', () => {
  let component: RegistrationWorkerTermsComponent;
  let fixture: ComponentFixture<RegistrationWorkerTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationWorkerTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationWorkerTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
