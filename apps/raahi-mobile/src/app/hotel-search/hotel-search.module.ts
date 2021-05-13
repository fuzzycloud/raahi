import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelSearchPageRoutingModule } from './hotel-search-routing.module';

import { HotelSearchPage } from './hotel-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelSearchPageRoutingModule
  ],
  declarations: [HotelSearchPage]
})
export class HotelSearchPageModule {}
