import { Component, OnInit } from '@angular/core';
import { HotelsService, HotelDTO } from '../../api/hotels.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  hotels: HotelDTO [] = [];
  constructor(private hotelsService: HotelsService ,
    private storage: Storage) { }

  ngOnInit() {
    console.log(this.hotelsService.GetHotelName());
    this.hotels = this.hotelsService.GetHotelName();
    this.hotelsService.setData();
     }

     setData() {
      this.hotelsService.setData();
      this.hotelsService.getData();
     }

//      getData() {

//  this.hotelsService.getData();
//      }

     }
