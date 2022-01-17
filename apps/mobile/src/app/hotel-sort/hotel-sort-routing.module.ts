import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelSortPage } from './hotel-sort.page';

const routes: Routes = [
  {
    path: '',
    component: HotelSortPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelSortPageRoutingModule {}
