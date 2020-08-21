import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCalculatorComponent } from './shipping-calculator.component';

describe('ShippingCalculatorComponent', () => {
  let component: ShippingCalculatorComponent;
  let fixture: ComponentFixture<ShippingCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
