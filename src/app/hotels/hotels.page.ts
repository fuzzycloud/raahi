import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../api/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  constructor(private hotelsService:HotelsService) { }

  ngOnInit() {
    console.log(this.hotelsService.GetHotelName());
  }

}
