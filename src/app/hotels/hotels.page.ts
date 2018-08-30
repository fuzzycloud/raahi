import { Component, OnInit } from '@angular/core';
import { HotelsService, HotelDTO } from '../api/hotels.service';
import { PopoverController } from '@ionic/angular';




@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})


export class HotelsPage implements OnInit {
  hotels: HotelDTO [] = [];
  // hotels: Array<HotelDTO> = [];
  constructor(private hotelsService: HotelsService,
    public popoverController: PopoverController) { }

  ngOnInit() {
    console.log(this.hotelsService.GetHotelName());
    this.hotels = this.hotelsService.GetHotelName();
  }
  }
