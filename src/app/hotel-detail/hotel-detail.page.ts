import { Component, OnInit } from '@angular/core';
import { HotelsService, HotelDTO } from '../api/hotels.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
})
export class HotelDetailPage implements OnInit {
  hotels: HotelDTO [] = [];
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    console.log(this.hotelsService.GetHotelName());
    this.hotels = this.hotelsService.GetHotelName();

  }

}
