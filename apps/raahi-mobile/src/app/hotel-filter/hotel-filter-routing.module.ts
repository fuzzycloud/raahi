import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelFilterPage } from './hotel-filter.page';

const routes: Routes = [
  {
    path: '',
    component: HotelFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelFilterPageRoutingModule {}
