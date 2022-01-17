import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengersPage } from './passengers.page';

const routes: Routes = [
  {
    path: '',
    component: PassengersPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengersPageRoutingModule {}
