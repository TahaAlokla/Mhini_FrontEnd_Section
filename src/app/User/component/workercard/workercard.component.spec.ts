import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkercardComponent } from './workercard.component';

describe('WorkercardComponent', () => {
  let component: WorkercardComponent;
  let fixture: ComponentFixture<WorkercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
