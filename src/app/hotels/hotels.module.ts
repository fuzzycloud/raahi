import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotelsPage } from './hotels.page';
import { TestComponent } from './test/test.component';
import { HeadertagComponent } from './headertag/headertag.component';
import { CardComponent } from './card/card.component';
import { MapViewComponent } from './test/map-view/map-view.component';
import { HotelSearchComponent } from './test/hotel-search/hotel-search.component';
import { PriceComponent } from './test/price/price.component';
import { StarRatingComponent } from './test/star-rating/star-rating.component';
import { AccommodationTypeComponent } from './test/accommodation-type/accommodation-type.component';
import { GuestReviewScoreComponent } from './test/guest-review-score/guest-review-score.component';
import { HighlyRatedByGuestsComponent } from './test/highly-rated-by-guests/highly-rated-by-guests.component';
import { DistrictsAreasComponent } from './test/districts-areas/districts-areas.component';
import { HotelChainsAndBrandsComponent } from './test/hotel-chains-and-brands/hotel-chains-and-brands.component';
import { FreeAmenitiesComponent } from './test/free-amenities/free-amenities.component';
import { HotelAmenitiesComponent } from './test/hotel-amenities/hotel-amenities.component';
// import { HotelComponent } from './test/hotel/hotel.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HotelsPage,
    TestComponent,
    HeadertagComponent,
    CardComponent,
    MapViewComponent,
    HotelSearchComponent,
    PriceComponent,
    StarRatingComponent,
    AccommodationTypeComponent,
    GuestReviewScoreComponent,
    HighlyRatedByGuestsComponent,
    DistrictsAreasComponent,
    HotelChainsAndBrandsComponent,
    FreeAmenitiesComponent,
    HotelAmenitiesComponent,
  ]
})
export class HotelsPageModule { }
