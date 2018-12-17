import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.page.html',
  styleUrls: ['./hotel-search.page.scss'],
})
export class HotelSearchPage implements OnInit {
  inputNumber: string;
  key = '';
  constructor(private storage: Storage) { }

  ngOnInit() {
  }
  save() {
    this.storage.set(this.key, this.inputNumber);
  }
  load() {
    this.storage.get(this.key).then((val) => {
      console.log('Your booked Room', val);
    });
  }
}
