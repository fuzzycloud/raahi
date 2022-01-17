import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    NzProgressModule,
    NzTableModule,
    NzDividerModule,
    NzMenuModule,
    NzLayoutModule,
    // ChartsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
