import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertagComponent } from './headertag.component';

describe('HeadertagComponent', () => {
  let component: HeadertagComponent;
  let fixture: ComponentFixture<HeadertagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadertagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadertagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
