import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressPageRoutingModule } from './press-routing.module';

import { PressPage } from './press.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PressPageRoutingModule],
  declarations: [PressPage],
})
export class PressPageModule {}
