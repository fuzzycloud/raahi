import { Injectable } from '@angular/core';
import * as faker from 'faker';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
const fakeData = 20;

export type HotelDTO = {
  Name: string
  Image: string
  AddressCity: string
  AddressState: string
  AddressCountry: string
  CheckInDate: Date
  CheckOutDate: Date
  RandomNumber: Number
  RandomColor: string
  RandomPrice: string
};

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
key = '';
  constructor(private storage: Storage) { }

  GetHotelName() {
    let hotels: HotelDTO[] = [];
    for (let i = 0; i < fakeData; i++) {
      hotels.push({
        Name: faker.company.companyName(),
        Image: "https://loremflickr.com/640/460/hotel",
        CheckInDate: faker.date.future(),
        CheckOutDate: faker.date.future(),
        AddressCity: faker.address.city(),
        AddressState: faker.address.state(),
        AddressCountry: faker.address.country(),
        // Addresszip:faker.address.zipCode()
        RandomNumber: faker.random.number(),
        RandomColor: faker.commerce.color(),
        RandomPrice: faker.commerce.price(),
      });
    }

    return hotels;
  }

  /*Store random number **/
  setData() {
        this.storage.set(this.key, faker.random.number() );
   }

   /*Get data which is stored in database **/
  getData() {
    this.storage.get(this.key).then((val) => {
      console.log('Available Room', val);
    });

  }

}
