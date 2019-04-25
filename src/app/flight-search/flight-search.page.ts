import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.page.html',
  styleUrls: ['./flight-search.page.scss'],
})
export class FlightSearchPage implements OnInit {
  tab = 'one-way';

  show(tab) {
    this.tab = tab;
  }
  constructor() { }

  ngOnInit() {
  }

}
