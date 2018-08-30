import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationTypeComponent } from './accomodation-type.component';

describe('AccomodationTypeComponent', () => {
  let component: AccomodationTypeComponent;
  let fixture: ComponentFixture<AccomodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
