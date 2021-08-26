import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubAdminComponent } from './register-sub-admin.component';

describe('RegisterSubAdminComponent', () => {
  let component: RegisterSubAdminComponent;
  let fixture: ComponentFixture<RegisterSubAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSubAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
