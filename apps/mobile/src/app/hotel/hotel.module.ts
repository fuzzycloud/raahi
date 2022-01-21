import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPageRoutingModule } from './hotel-routing.module';

import { HotelPage } from './hotel.page';

import { HotelListModule} from '@raahi/common-mobile-ui';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HotelPageRoutingModule,HotelListModule],
  declarations: [HotelPage, ],
})
export class HotelPageModule {}
