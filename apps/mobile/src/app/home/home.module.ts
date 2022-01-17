import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule,NgZorroAntdMobileModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
