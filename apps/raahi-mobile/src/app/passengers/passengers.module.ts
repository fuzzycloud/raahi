import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengersPageRoutingModule } from './passengers-routing.module';

import { PassengersPage } from './passengers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengersPageRoutingModule
  ],
  declarations: [PassengersPage]
})
export class PassengersPageModule {}
