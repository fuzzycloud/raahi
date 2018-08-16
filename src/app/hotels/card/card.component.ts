import { Component, OnInit } from '@angular/core';
import { HotelsService, HotelDTO } from '../../api/hotels.service';
import { Input } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  hotels: HotelDTO [] = [];
  // @Input() public parentdata;
  constructor(private hotelsService:HotelsService) { }

  ngOnInit() {
    console.log(this.hotelsService.GetHotelName());
    this.hotels = this.hotelsService.GetHotelName();
  }

}
