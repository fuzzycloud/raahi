import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsPage } from './airports.page';

describe('AirportsPage', () => {
  let component: AirportsPage;
  let fixture: ComponentFixture<AirportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
