import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupuserComponent } from './pickupuser.component';

describe('PickupuserComponent', () => {
  let component: PickupuserComponent;
  let fixture: ComponentFixture<PickupuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
