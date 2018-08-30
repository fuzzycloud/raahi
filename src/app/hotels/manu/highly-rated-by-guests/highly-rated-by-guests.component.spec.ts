import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlyRatedByGuestsComponent } from './highly-rated-by-guests.component';

describe('HighlyRatedByGuestsComponent', () => {
  let component: HighlyRatedByGuestsComponent;
  let fixture: ComponentFixture<HighlyRatedByGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlyRatedByGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlyRatedByGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
