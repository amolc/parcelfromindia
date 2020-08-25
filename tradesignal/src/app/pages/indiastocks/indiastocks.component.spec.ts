import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiastocksComponent } from './indiastocks.component';

describe('IndiastocksComponent', () => {
  let component: IndiastocksComponent;
  let fixture: ComponentFixture<IndiastocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiastocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiastocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
