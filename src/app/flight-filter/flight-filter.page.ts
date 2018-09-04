import { Component, OnInit } from '@angular/core';
import { FlightsService, FlightDTO } from '../api/flights.service';


@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.page.html',
  styleUrls: ['./flight-filter.page.scss'],
})
export class FlightFilterPage implements OnInit {
flights: FlightDTO [] = [];
  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    console.log(this.flightsService.GetFlights());
    this.flights = this.flightsService.GetFlights();
  }

}
