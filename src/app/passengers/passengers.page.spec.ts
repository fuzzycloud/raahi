import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersPage } from './passengers.page';

describe('PassengersPage', () => {
  let component: PassengersPage;
  let fixture: ComponentFixture<PassengersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
