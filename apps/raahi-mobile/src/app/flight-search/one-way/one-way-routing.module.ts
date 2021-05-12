import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneWayPage } from './one-way.page';

const routes: Routes = [
  {
    path: '',
    component: OneWayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneWayPageRoutingModule {}
