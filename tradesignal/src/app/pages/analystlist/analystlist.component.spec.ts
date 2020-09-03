import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystlistComponent } from './analystlist.component';

describe('AnalystlistComponent', () => {
  let component: AnalystlistComponent;
  let fixture: ComponentFixture<AnalystlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
