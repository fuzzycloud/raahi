import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.page.html',
  styleUrls: ['./hotel-filter.page.scss'],
})
export class HotelFilterPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }


}
