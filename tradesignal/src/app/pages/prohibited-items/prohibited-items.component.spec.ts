import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedItemsComponent } from './prohibited-items.component';

describe('ProhibitedItemsComponent', () => {
  let component: ProhibitedItemsComponent;
  let fixture: ComponentFixture<ProhibitedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
