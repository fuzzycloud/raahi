import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightDetailPageRoutingModule } from './flight-detail-routing.module';

import { FlightDetailPage } from './flight-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightDetailPageRoutingModule,
  ],
  declarations: [FlightDetailPage],
})
export class FlightDetailPageModule {}
