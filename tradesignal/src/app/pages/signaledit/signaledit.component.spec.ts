import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaleditComponent } from './signaledit.component';

describe('SignaleditComponent', () => {
  let component: SignaleditComponent;
  let fixture: ComponentFixture<SignaleditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaleditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
