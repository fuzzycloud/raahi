import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneWayPageRoutingModule } from './one-way-routing.module';

import { OneWayPage } from './one-way.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneWayPageRoutingModule
  ],
  declarations: [OneWayPage]
})
export class OneWayPageModule {}
