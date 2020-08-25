import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystpagedetailsComponent } from './analystpagedetails.component';

describe('AnalystpagedetailsComponent', () => {
  let component: AnalystpagedetailsComponent;
  let fixture: ComponentFixture<AnalystpagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystpagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystpagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
