import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsAreasComponent } from './districts-areas.component';

describe('DistrictsAreasComponent', () => {
  let component: DistrictsAreasComponent;
  let fixture: ComponentFixture<DistrictsAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictsAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
