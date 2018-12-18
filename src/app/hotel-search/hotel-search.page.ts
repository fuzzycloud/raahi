import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.page.html',
  styleUrls: ['./hotel-search.page.scss'],
})
export class HotelSearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
minStartDate(): string {
  return moment().format('YYYY-MM-DD');
}
}
