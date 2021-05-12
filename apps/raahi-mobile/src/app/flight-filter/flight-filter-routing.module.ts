import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightFilterPage } from './flight-filter.page';

const routes: Routes = [
  {
    path: '',
    component: FlightFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightFilterPageRoutingModule {}
