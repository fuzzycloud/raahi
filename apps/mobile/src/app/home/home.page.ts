import { Component } from '@angular/core';

@Component({
  selector: 'raahi-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  destination = [
    {
      name: 'Delhi',
      image: 'https://image.freepik.com/free-photo/india-gate-mornings_181624-17306.jpg'
    },
    {
      name: 'Gujarat',
      image: 'https://image.freepik.com/free-vector/ahmedabad-skyline-paper-style_23-2148636943.jpg'
    },

    {
      name: 'Jaipur',
      image: 'https://image.freepik.com/free-photo/hawa-mahal-palace-jaipur-india_53876-31311.jpg'
    },
    {
      name: 'Udaipur ',
      image: 'https://image.freepik.com/free-photo/udaipur-city-view-from-hotel-balcony-rajasthan-india_53876-65505.jpg'
    },
    {
      name: 'Leh ladak',
      image: 'https://image.freepik.com/free-photo/leh-ladak-flag-faith-mountain_1150-11110.jpg'
    }

  ]

  staycation = [
    {
      name: 'Best Resorts',
      image: 'https://image.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg'
    },
    {
      name: 'Hangout with Friends',
      image: 'https://image.freepik.com/free-photo/group-man-woman-enjoy-camping-picnic-barbecue-lake-with-tents-background-young-mixed-race-asian-woman-man-young-people-s-hands-toasting-cheering-bottles-beer_1253-1041.jpg'
    },
    
    {
      name: 'Romantic Destination',
      image: 'https://image.freepik.com/free-photo/swan-towel_74190-3674.jpg'
    },
    {
      name: 'Kids friendly staycation',
      image: 'https://image.freepik.com/free-photo/woman-hugs-from-smiling-little-child-before-christmas-tree_8353-943.jpg'
    },


  ]

  constructor() { }
}
