import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'raahi-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.css'],
})
export class OffersPage implements OnInit {
  offer = [
    {
      title: 'Reschedule Free',
      validity: 'Valid until 31 July 2022',
      image: 'assets/offers/o_1.jpg'
    },
    {
      title: 'Reschedule Free',
      validity: 'Valid until 31 July 2022',
      image: 'assets/offers/o_3.jpg'
    },
    {
      title: 'Reschedule Free',
      validity: 'Valid until 31 July 2022',
      image: 'assets/offers/o_2.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
