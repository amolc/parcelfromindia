import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesignalComponent } from './createsignal.component';

describe('CreatesignalComponent', () => {
  let component: CreatesignalComponent;
  let fixture: ComponentFixture<CreatesignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
