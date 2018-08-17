import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationTypeComponent } from './accommodation-type.component';

describe('AccommodationTypeComponent', () => {
  let component: AccommodationTypeComponent;
  let fixture: ComponentFixture<AccommodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
