import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallectComponent } from './wallect.component';

describe('WallectComponent', () => {
  let component: WallectComponent;
  let fixture: ComponentFixture<WallectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
