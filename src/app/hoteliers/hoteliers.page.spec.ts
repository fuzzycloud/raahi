import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteliersPage } from './hoteliers.page';

describe('HoteliersPage', () => {
  let component: HoteliersPage;
  let fixture: ComponentFixture<HoteliersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteliersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteliersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
