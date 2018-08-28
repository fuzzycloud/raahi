import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSearchPage } from './hotel-search.page';

describe('HotelSearchPage', () => {
  let component: HotelSearchPage;
  let fixture: ComponentFixture<HotelSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
