import { Injectable } from '@angular/core';
import * as faker from 'faker';
import * as _ from 'lodash';

const fakeData = 20;

export type HotelDTO = {
  Name : string
  Image : string
  Addresscity:string
  Addressstate:string
  Addresscountry:string
  Checkindate:Date
  Checkoutdate:Date
}

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  GetHotelName() {
    let hotels : HotelDTO [] = [];
    for (let i = 0; i < fakeData; i++) {
      hotels.push({
        Name : faker.company.companyName(),
        Image : "https://loremflickr.com/640/460/hotel",
        Checkindate:faker.date.future(),
        Checkoutdate:faker.date.future(),
        Addresscity:faker.address.city(),
       Addressstate:faker.address.state(),
        Addresscountry:faker.address.country(),
        // Addresszip:faker.address.zipCode()
      })
    }
    
    return hotels;
  }

}
