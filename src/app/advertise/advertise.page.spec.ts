import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisePage } from './advertise.page';

describe('AdvertisePage', () => {
  let component: AdvertisePage;
  let fixture: ComponentFixture<AdvertisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
