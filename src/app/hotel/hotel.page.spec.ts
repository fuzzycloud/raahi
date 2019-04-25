import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPage } from './hotel.page';

describe('HotelPage', () => {
  let component: HotelPage;
  let fixture: ComponentFixture<HotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
