import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsAndAreasComponent } from './districts-and-areas.component';

describe('DistrictsAndAreasComponent', () => {
  let component: DistrictsAndAreasComponent;
  let fixture: ComponentFixture<DistrictsAndAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictsAndAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsAndAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
