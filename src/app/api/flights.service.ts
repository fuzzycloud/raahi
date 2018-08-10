import { Injectable } from '@angular/core';
import * as faker from 'faker';

const fakeData = 20;

type FlightDTO = {
  Name : string
  Image : string
}

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  GetFlights () {
    let flights : FlightDTO [] = [];

    for (let i = 0; i < fakeData; i++) {
      flights.push({
        Name : faker.company.companyName(),
        Image : "https://loremflickr.com/640/460/boing"
      })
    }
    
    return flights;
  }
}
