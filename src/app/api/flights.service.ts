import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { AngularFireFunctions } from 'angularfire2/functions';
import { Observable, from, of, range } from 'rxjs';


const fakeData = 20;

export interface FlightDTO {
  Name: string;
  Image: string;
  City: string;
  RandomPrice: string;
  RandomNumber: Number;
}

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private fireFunc: AngularFireFunctions) {

  }

  GetHelloWorld(data) {
    return this.fireFunc.httpsCallable('helloWorld')(data);
  }

  GetFlights() {
    const flights: FlightDTO[] = [];

    for (let i = 0; i < fakeData; i++) {
      flights.push({
        Name: faker.company.companyName(),
        Image: 'https://loremflickr.com/640/460/boing',
        City : faker.address.city(),
        RandomNumber: faker.random.number(),
        RandomPrice: faker.commerce.price(),
      });
    }

    return flights;
  }
}
