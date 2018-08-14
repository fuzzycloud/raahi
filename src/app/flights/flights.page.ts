import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../api/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.page.html',
  styleUrls: ['./flights.page.scss'],
})
export class FlightsPage implements OnInit {

  constructor(private flightsService : FlightsService) { }

  ngOnInit() {
    // console.log(this.flightsService.GetFlights());
    this.flightsService.GetHelloWorld("").subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )

    this.flightsService.GetFlights().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )

  }

}
