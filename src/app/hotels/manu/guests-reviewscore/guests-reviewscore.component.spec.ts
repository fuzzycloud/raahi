import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsReviewscoreComponent } from './guests-reviewscore.component';

describe('GuestsReviewscoreComponent', () => {
  let component: GuestsReviewscoreComponent;
  let fixture: ComponentFixture<GuestsReviewscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsReviewscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsReviewscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
