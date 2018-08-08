import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPage } from './flights.page';

describe('FlightsPage', () => {
  let component: FlightsPage;
  let fixture: ComponentFixture<FlightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
