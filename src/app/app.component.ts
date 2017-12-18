import { Component,  ViewChild  } from '@angular/core';
import { Platform,NavController, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { CreatePage } from '../pages/create/create';
import { InprogressPage } from '../pages/inprogress/inprogress';
import { PendingPage } from '../pages/pending/pending';
import { HelpPage } from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Create Package', component: CreatePage },   
      { title: 'Pending', component: PendingPage },
      { title: 'In Progress', component: InprogressPage },      
      { title: 'Notifications', component: NotificationPage },  
      { title: 'Help', component:  HelpPage},  
          
    ];
  }
  
  openPage(p){
    this.nav.setRoot(p.component);
  }
}

