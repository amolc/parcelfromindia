import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickuplistComponent } from './pickuplist.component';

describe('PickuplistComponent', () => {
  let component: PickuplistComponent;
  let fixture: ComponentFixture<PickuplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickuplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickuplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
