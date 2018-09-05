import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Hotels',
      url: '/HotelSearch',
       icon: 'home'
    },
    {
      title: 'Flights',
      url: '/FlightSearch',
       icon: 'list'
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
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
