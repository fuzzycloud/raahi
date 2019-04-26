import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayComponent } from './one-way.component';

describe('OneWayComponent', () => {
  let component: OneWayComponent;
  let fixture: ComponentFixture<OneWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
