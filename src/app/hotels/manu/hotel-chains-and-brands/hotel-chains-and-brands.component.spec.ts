import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelChainsAndBrandsComponent } from './hotel-chains-and-brands.component';

describe('HotelChainsAndBrandsComponent', () => {
  let component: HotelChainsAndBrandsComponent;
  let fixture: ComponentFixture<HotelChainsAndBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelChainsAndBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelChainsAndBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
