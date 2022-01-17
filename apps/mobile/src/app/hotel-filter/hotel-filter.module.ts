import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelFilterPageRoutingModule } from './hotel-filter-routing.module';

import { HotelFilterPage } from './hotel-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelFilterPageRoutingModule,
  ],
  declarations: [HotelFilterPage],
})
export class HotelFilterPageModule {}
