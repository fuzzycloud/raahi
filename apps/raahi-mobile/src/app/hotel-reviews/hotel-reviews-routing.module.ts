import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelReviewsPage } from './hotel-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: HotelReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelReviewsPageRoutingModule {}
