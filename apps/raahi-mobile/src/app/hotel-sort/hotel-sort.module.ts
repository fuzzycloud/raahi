import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelSortPageRoutingModule } from './hotel-sort-routing.module';

import { HotelSortPage } from './hotel-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelSortPageRoutingModule
  ],
  declarations: [HotelSortPage]
})
export class HotelSortPageModule {}
