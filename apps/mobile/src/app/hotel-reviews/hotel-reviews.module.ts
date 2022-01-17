import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelReviewsPageRoutingModule } from './hotel-reviews-routing.module';

import { HotelReviewsPage } from './hotel-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelReviewsPageRoutingModule,
  ],
  declarations: [HotelReviewsPage],
})
export class HotelReviewsPageModule {}
