import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystviewComponent } from './analystview.component';

describe('AnalystviewComponent', () => {
  let component: AnalystviewComponent;
  let fixture: ComponentFixture<AnalystviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
