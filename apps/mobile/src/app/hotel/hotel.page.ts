import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'raahi-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.css'],
})
export class HotelPage implements OnInit {
  constructor(private router : Router){}
  onHotelDetail(){
    this.router.navigate(['/hotel-detail']);
  }

  ngOnInit() {}
}
