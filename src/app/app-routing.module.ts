import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

  { path: 'hotel-search', loadChildren: './hotel-search/hotel-search.module#HotelSearchPageModule' },
  { path: 'flight-search', loadChildren: './flight-search/flight-search.module#FlightSearchPageModule' },
  { path: 'passengers', loadChildren: './passengers/passengers.module#PassengersPageModule' },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutPageModule'
  },
  {
    path: 'press',
    loadChildren: './press/press.module#PressPageModule'
  },
  {
    path: 'privacy',
    loadChildren: './privacy/privacy.module#PrivacyPageModule'
  },
  { path: 'hotel', loadChildren: './hotel/hotel.module#HotelPageModule' },  { path: 'hotel-sort', loadChildren: './hotel-sort/hotel-sort.module#HotelSortPageModule' },
  { path: 'hotel-filter', loadChildren: './hotel-filter/hotel-filter.module#HotelFilterPageModule' },
  { path: 'hotel-detail', loadChildren: './hotel-detail/hotel-detail.module#HotelDetailPageModule' },
  { path: 'hotel-reviews', loadChildren: './hotel-reviews/hotel-reviews.module#HotelReviewsPageModule' },
  { path: 'flights', loadChildren: './flights/flights.module#FlightsPageModule' },
  { path: 'flight-sort', loadChildren: './flight-sort/flight-sort.module#FlightSortPageModule' },
  { path: 'flight-filter', loadChildren: './flight-filter/flight-filter.module#FlightFilterPageModule' },
  { path: 'flight-detail', loadChildren: './flight-detail/flight-detail.module#FlightDetailPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
