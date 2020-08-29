import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSignalComponent } from './plan-signal.component';

describe('PlanSignalComponent', () => {
  let component: PlanSignalComponent;
  let fixture: ComponentFixture<PlanSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
