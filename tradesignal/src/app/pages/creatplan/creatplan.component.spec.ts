import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatplanComponent } from './creatplan.component';

describe('CreatplanComponent', () => {
  let component: CreatplanComponent;
  let fixture: ComponentFixture<CreatplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
