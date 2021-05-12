import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'raahi-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Hotels',
      url: '/hotel-search',
       icon: 'home'
    },
    {
      title: 'Flights',
      url: '/flight-search',
       icon: 'md-jet'
    },
    {

      title: 'Privacy',
      url: '/privacy',
      icon: 'lock'
    },
    {
      title: 'Press',
      url: '/press',
       icon: 'print'
    },
    {
      title: 'About us',
      url: '/about',
      icon: 'list'
    }
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
