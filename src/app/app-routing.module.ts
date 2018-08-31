import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  {
    path: 'flights',
    loadChildren: './flights/flights.module#FlightsPageModule'
  },
  {
    path: 'hotels',
    loadChildren: './hotels/hotels.module#HotelsPageModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutPageModule'
  },
  {
    path: 'press',
    loadChildren: './press/press.module#PressPageModule'
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsPageModule'
  },
  {
    path: 'advertise',
    loadChildren: './advertise/advertise.module#AdvertisePageModule'
  },
  {
    path: 'hoteliers',
    loadChildren: './hoteliers/hoteliers.module#HoteliersPageModule'
  },
  {
    path: 'privacy',
    loadChildren: './privacy/privacy.module#PrivacyPageModule'
  },
  {
    path: 'terms',
    loadChildren: './terms/terms.module#TermsPageModule'
  },
  {
    path: 'airports',
    loadChildren: './airports/airports.module#AirportsPageModule'
  },
  {
    path: 'airlines',
    loadChildren: './airlines/airlines.module#AirlinesPageModule'
  },
  {
    path: 'schedules',
    loadChildren: './schedules/schedules.module#SchedulesPageModule'
  },
  { path: 'HotelFilter',
    loadChildren: './hotel-filter/hotel-filter.module#HotelFilterPageModule'
  },
  { path: 'HotelSort',
    loadChildren: './hotel-sort/hotel-sort.module#HotelSortPageModule'
  },
  { path: 'HotelDetail',
  loadChildren: './hotel-detail/hotel-detail.module#HotelDetailPageModule'
 },
  { path: 'FlightSearch',
   loadChildren: './flight-search/flight-search.module#FlightSearchPageModule'
  },
  { path: 'HotelSearch',
  loadChildren: './hotel-search/hotel-search.module#hotelSearchPageModule'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
