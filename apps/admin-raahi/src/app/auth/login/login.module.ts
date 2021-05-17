import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,
    NzCardModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSpinModule,
    NzGridModule,
    FormsModule,
    NzCheckboxModule,
    NzDescriptionsModule,
    NzDividerModule,
     RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginModule { }
