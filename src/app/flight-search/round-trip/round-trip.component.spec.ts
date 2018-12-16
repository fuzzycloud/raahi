import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTripComponent } from './round-trip.component';

describe('RoundTripComponent', () => {
  let component: RoundTripComponent;
  let fixture: ComponentFixture<RoundTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
