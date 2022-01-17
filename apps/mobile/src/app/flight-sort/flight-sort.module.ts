import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightSortPageRoutingModule } from './flight-sort-routing.module';

import { FlightSortPage } from './flight-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightSortPageRoutingModule,
  ],
  declarations: [FlightSortPage],
})
export class FlightSortPageModule {}
