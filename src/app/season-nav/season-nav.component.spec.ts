import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonNavComponent } from './season-nav.component';

describe('SeasonNavComponent', () => {
  let component: SeasonNavComponent;
  let fixture: ComponentFixture<SeasonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
