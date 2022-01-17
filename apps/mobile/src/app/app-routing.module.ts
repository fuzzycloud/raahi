import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'flight-search',
    loadChildren: () =>
      import('./flight-search/flight-search.module').then(
        (m) => m.FlightSearchPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'flight-detail',
    loadChildren: () =>
      import('./flight-detail/flight-detail.module').then(
        (m) => m.FlightDetailPageModule
      ),
  },
  {
    path: 'flight-filter',
    loadChildren: () =>
      import('./flight-filter/flight-filter.module').then(
        (m) => m.FlightFilterPageModule
      ),
  },

  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights.module').then((m) => m.FlightsPageModule),
  },

  {
    path: 'hotel',
    loadChildren: () =>
      import('./hotel/hotel.module').then((m) => m.HotelPageModule),
  },
  {
    path: 'hotel-detail',
    loadChildren: () =>
      import('./hotel-detail/hotel-detail.module').then(
        (m) => m.HotelDetailPageModule
      ),
  },
  {
    path: 'hotel-filter',
    loadChildren: () =>
      import('./hotel-filter/hotel-filter.module').then(
        (m) => m.HotelFilterPageModule
      ),
  },
  {
    path: 'hotel-reviews',
    loadChildren: () =>
      import('./hotel-reviews/hotel-reviews.module').then(
        (m) => m.HotelReviewsPageModule
      ),
  },
  {
    path: 'hotel-search',
    loadChildren: () =>
      import('./hotel-search/hotel-search.module').then(
        (m) => m.HotelSearchPageModule
      ),
  },
  {
    path: 'hotel-sort',
    loadChildren: () =>
      import('./hotel-sort/hotel-sort.module').then(
        (m) => m.HotelSortPageModule
      ),
  },
  {
    path: 'passengers',
    loadChildren: () =>
      import('./passengers/passengers.module').then(
        (m) => m.PassengersPageModule
      ),
  },
  {
    path: 'press',
    loadChildren: () =>
      import('./press/press.module').then((m) => m.PressPageModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./privacy/privacy.module').then((m) => m.PrivacyPageModule),
  },
  {
    path: 'flight-sort',
    loadChildren: () =>
      import('./flight-sort/flight-sort.module').then(
        (m) => m.FlightSortPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
