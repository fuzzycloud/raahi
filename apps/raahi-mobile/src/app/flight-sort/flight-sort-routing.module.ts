import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightSortPage } from './flight-sort.page';

const routes: Routes = [
  {
    path: '',
    component: FlightSortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightSortPageRoutingModule {}
