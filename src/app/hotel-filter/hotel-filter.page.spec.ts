import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFilterPage } from './hotel-filter.page';

describe('HotelFilterPage', () => {
  let component: HotelFilterPage;
  let fixture: ComponentFixture<HotelFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
