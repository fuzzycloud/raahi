import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  constructor() { }

  ngOnInit() {
  }

}
