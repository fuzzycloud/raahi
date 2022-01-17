import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightSearchPageRoutingModule } from './flight-search-routing.module';

import { FlightSearchPage } from './flight-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightSearchPageRoutingModule,
  ],
  declarations: [FlightSearchPage],
})
export class FlightSearchPageModule {}
