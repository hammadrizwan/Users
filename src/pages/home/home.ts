import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';
import { CreatePage } from '../create/create';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public pages: string[] = [
    "CreatePage",
    "ProfilePage",
    "InProgressPage",
    "PendingPage",
    "AccountSettingsPage" 
  ];
  constructor(public navCtrl: NavController,app: App, menu: MenuController) {
    menu.enable(true);
  }


  openPage(p){
    this.navCtrl.push(p);
  }

}
