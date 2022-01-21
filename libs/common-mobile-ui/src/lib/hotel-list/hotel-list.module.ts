import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HotelListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HotelListComponent]
})
export class HotelListModule { }
