import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanbyidComponent } from './planbyid.component';

describe('PlanbyidComponent', () => {
  let component: PlanbyidComponent;
  let fixture: ComponentFixture<PlanbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
