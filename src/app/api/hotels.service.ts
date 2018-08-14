import { Injectable } from '@angular/core';
import * as faker from 'faker';
import * as _ from 'lodash';

const fakeData = 20;

export type HotelDTO = {
  Name: string
  Image: string
  AddressCity: string
  AddressState: string
  AddressCountry: string
  CheckInDate: Date
  CheckOutDate: Date
  RandomNumber:Number
  RandomColor:string
  RandomPrice:string
}

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

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
        RandomNumber:faker.random.number(),
        RandomColor:faker.commerce.color(),
        RandomPrice:faker.commerce.price(),
      })
    }

    return hotels;
  }

}
