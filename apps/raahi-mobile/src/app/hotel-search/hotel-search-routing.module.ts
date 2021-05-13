import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelSearchPage } from './hotel-search.page';

const routes: Routes = [
  {
    path: '',
    component: HotelSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelSearchPageRoutingModule {}
