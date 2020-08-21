import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistedPurchaseComponent } from './assisted-purchase.component';

describe('AssistedPurchaseComponent', () => {
  let component: AssistedPurchaseComponent;
  let fixture: ComponentFixture<AssistedPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistedPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistedPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
