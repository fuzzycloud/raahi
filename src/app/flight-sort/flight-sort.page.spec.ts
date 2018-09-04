import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSortPage } from './flight-sort.page';

describe('FlightSortPage', () => {
  let component: FlightSortPage;
  let fixture: ComponentFixture<FlightSortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSortPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
