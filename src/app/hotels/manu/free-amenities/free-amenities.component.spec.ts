import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAmenitiesComponent } from './free-amenities.component';

describe('FreeAmenitiesComponent', () => {
  let component: FreeAmenitiesComponent;
  let fixture: ComponentFixture<FreeAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
