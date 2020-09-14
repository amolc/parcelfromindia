import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentuserComponent } from './shipmentuser.component';

describe('ShipmentuserComponent', () => {
  let component: ShipmentuserComponent;
  let fixture: ComponentFixture<ShipmentuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
