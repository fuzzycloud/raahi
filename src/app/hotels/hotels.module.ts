import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotelsPage } from './hotels.page';
import { TestComponent } from './test/test.component';
import { HeadertagComponent } from './headertag/headertag.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelsPage, TestComponent, HeadertagComponent, CardComponent]
})
export class HotelsPageModule {}
