import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';
import { CreatePage } from '../create/create';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,app: App, menu: MenuController) {
    
  }


 

}
