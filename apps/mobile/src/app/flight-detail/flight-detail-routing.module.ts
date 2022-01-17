import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightDetailPage } from './flight-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FlightDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightDetailPageRoutingModule {}
