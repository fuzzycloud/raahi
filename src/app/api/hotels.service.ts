import { Injectable } from '@angular/core';
import * as faker from 'faker';
import * as _ from 'lodash';

const fakeData = 20;

export type HotelDTO = {
  Name : string
  Image : string
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
        Image : "https://loremflickr.com/640/460/hotel"
      })
    }
    
    return hotels;
  }

}
