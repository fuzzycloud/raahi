import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelDetailPageRoutingModule } from './hotel-detail-routing.module';

import { HotelDetailPage } from './hotel-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelDetailPageRoutingModule
  ],
  declarations: [HotelDetailPage]
})
export class HotelDetailPageModule {}
