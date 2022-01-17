import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightSearchPage } from './flight-search.page';

const routes: Routes = [
  {
    path: '',
    component: FlightSearchPage,
    children: [
      {
        path: 'one-way',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../flight-search/one-way/one-way.module').then(
                (m) => m.OneWayPageModule
              ),
          },
        ],
      },
      {
        path: 'round-trip',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./round-trip/round-trip.module').then(
                (m) => m.RoundTripPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'one-way',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightSearchPageRoutingModule {}
