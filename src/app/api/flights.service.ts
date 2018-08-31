import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { AngularFireFunctions } from 'angularfire2/functions';
import { Observable, from, of, range } from 'rxjs';


const fakeData = 20;

export type FlightDTO = {
  Name: string
  Image: string
  City: string
};

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private fireFunc: AngularFireFunctions) {

  }

  GetHelloWorld(data) {
    return this.fireFunc.httpsCallable("helloWorld")(data);
  }

  GetFlights() {
    let flights: FlightDTO[] = [];

    for (let i = 0; i < fakeData; i++) {
      flights.push({
        Name: faker.company.companyName(),
        Image: "https://loremflickr.com/640/460/boing"
        City : faker.address.city(),
      });
    }

    return flights;
  }
}
