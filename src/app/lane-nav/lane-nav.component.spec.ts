import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneNavComponent } from './lane-nav.component';

describe('LaneNavComponent', () => {
  let component: LaneNavComponent;
  let fixture: ComponentFixture<LaneNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
