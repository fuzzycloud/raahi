import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightFilterPageRoutingModule } from './flight-filter-routing.module';

import { FlightFilterPage } from './flight-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightFilterPageRoutingModule,
  ],
  declarations: [FlightFilterPage],
})
export class FlightFilterPageModule {}
