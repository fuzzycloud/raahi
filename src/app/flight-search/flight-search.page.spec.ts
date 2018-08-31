import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchPage } from './flight-search.page';

describe('FlightSearchPage', () => {
  let component: FlightSearchPage;
  let fixture: ComponentFixture<FlightSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
