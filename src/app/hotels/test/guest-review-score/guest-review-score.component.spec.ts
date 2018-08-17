import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestReviewScoreComponent } from './guest-review-score.component';

describe('GuestReviewScoreComponent', () => {
  let component: GuestReviewScoreComponent;
  let fixture: ComponentFixture<GuestReviewScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestReviewScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestReviewScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
