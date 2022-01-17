import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundTripPageRoutingModule } from './round-trip-routing.module';

import { RoundTripPage } from './round-trip.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RoundTripPageRoutingModule],
  declarations: [RoundTripPage],
})
export class RoundTripPageModule {}
