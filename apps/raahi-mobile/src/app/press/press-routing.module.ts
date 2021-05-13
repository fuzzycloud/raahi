import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressPage } from './press.page';

const routes: Routes = [
  {
    path: '',
    component: PressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressPageRoutingModule {}
