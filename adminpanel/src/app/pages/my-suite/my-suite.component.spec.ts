import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuiteComponent } from './my-suite.component';

describe('MySuiteComponent', () => {
  let component: MySuiteComponent;
  let fixture: ComponentFixture<MySuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
