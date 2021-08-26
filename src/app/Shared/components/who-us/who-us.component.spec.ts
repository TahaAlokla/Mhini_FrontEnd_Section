import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoUsComponent } from './who-us.component';

describe('WhoUsComponent', () => {
  let component: WhoUsComponent;
  let fixture: ComponentFixture<WhoUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
