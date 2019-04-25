import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReviewsPage } from './hotel-reviews.page';

describe('HotelReviewsPage', () => {
  let component: HotelReviewsPage;
  let fixture: ComponentFixture<HotelReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
