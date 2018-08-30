import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSortPage } from './hotel-sort.page';

describe('HotelSortPage', () => {
  let component: HotelSortPage;
  let fixture: ComponentFixture<HotelSortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSortPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
