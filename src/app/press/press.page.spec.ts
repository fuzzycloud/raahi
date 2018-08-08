import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressPage } from './press.page';

describe('PressPage', () => {
  let component: PressPage;
  let fixture: ComponentFixture<PressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
