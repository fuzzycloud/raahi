import { Component, OnInit } from '@angular/core';
import { HotelsService, HotelDTO } from '../../api/hotels.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  hotels: HotelDTO [] = [];
  constructor(private hotelsService:HotelsService) { }

  ngOnInit() {
    console.log(this.hotelsService.GetHotelName());
    this.hotels = this.hotelsService.GetHotelName();
  }
 
}
