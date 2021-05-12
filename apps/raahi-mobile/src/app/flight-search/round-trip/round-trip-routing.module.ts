import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundTripPage } from './round-trip.page';

const routes: Routes = [
  {
    path: '',
    component: RoundTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundTripPageRoutingModule {}
