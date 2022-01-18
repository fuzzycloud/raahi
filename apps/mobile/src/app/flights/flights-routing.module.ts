import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightsPage } from './flights.page';

const routes: Routes = [
  {
    path: '',
    component: FlightsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsPageRoutingModule {}
