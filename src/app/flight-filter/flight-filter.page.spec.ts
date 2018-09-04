import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFilterPage } from './flight-filter.page';

describe('FlightFilterPage', () => {
  let component: FlightFilterPage;
  let fixture: ComponentFixture<FlightFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
