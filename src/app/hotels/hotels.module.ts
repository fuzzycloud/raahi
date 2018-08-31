import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotelsPage } from './hotels.page';
import { ManuComponent } from './manu/manu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MapViewComponent } from './manu/map-view/map-view.component';
import { HotelSearchComponent } from './manu/hotel-search/hotel-search.component';
import { PriceComponent } from './manu/price/price.component';
import { StarRatingComponent } from './manu/star-rating/star-rating.component';
import { AccomodationTypeComponent } from './manu/accomodation-type/accomodation-type.component';
import { GuestsReviewscoreComponent } from './manu/guests-reviewscore/guests-reviewscore.component';
import { HighlyRatedByGuestsComponent } from './manu/highly-rated-by-guests/highly-rated-by-guests.component';
import { DistrictsAndAreasComponent } from './manu/districts-and-areas/districts-and-areas.component';

import { HotelChainsAndBrandsComponent } from './manu/hotel-chains-and-brands/hotel-chains-and-brands.component';
import { FreeAmenitiesComponent } from './manu/free-amenities/free-amenities.component';
import { HotelAmenitiesComponent } from './manu/hotel-amenities/hotel-amenities.component';


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
  declarations: [HotelsPage,
    ManuComponent,
    MainContentComponent,
    MapViewComponent,
    HotelSearchComponent,
    PriceComponent,
    StarRatingComponent,
    AccomodationTypeComponent,
    GuestsReviewscoreComponent,
    HighlyRatedByGuestsComponent, DistrictsAndAreasComponent,
    HotelChainsAndBrandsComponent, FreeAmenitiesComponent, HotelAmenitiesComponent]
})
export class HotelsPageModule { }
