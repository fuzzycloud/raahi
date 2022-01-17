import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelDetailPage } from './hotel-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HotelDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelDetailPageRoutingModule {}
